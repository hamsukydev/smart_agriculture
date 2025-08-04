import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { imageBase64 } = await req.json()
    
    if (!imageBase64) {
      return new Response(
        JSON.stringify({ error: 'Image data is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openaiApiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an expert agricultural pathologist specializing in crop disease identification. Analyze the provided plant/crop image and provide a detailed disease assessment. Return ONLY a valid JSON object with this exact structure:
{
  "name": "Disease name or 'Healthy' if no disease detected",
  "confidence": number between 0-100,
  "severity": "low" | "medium" | "high",
  "treatment": "Detailed treatment recommendations",
  "prevention": "Prevention strategies and best practices"
}

Focus on common Nigerian agricultural crops like cassava, yam, maize, rice, plantain, cocoa, and oil palm. Be specific about treatments available in West Africa.`
          },
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Please analyze this crop image for any diseases or health issues.'
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${imageBase64}`
                }
              }
            ]
          }
        ],
        max_tokens: 500,
        temperature: 0.1
      })
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    const content = data.choices[0]?.message?.content

    if (!content) {
      throw new Error('No response from OpenAI')
    }

    // Parse the JSON response
    let result
    try {
      result = JSON.parse(content)
    } catch (e) {
      // Fallback if JSON parsing fails
      result = {
        name: 'Analysis Complete',
        confidence: 75,
        severity: 'medium',
        treatment: content,
        prevention: 'Follow good agricultural practices and monitor regularly.'
      }
    }

    return new Response(
      JSON.stringify(result),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in detect-disease function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to analyze image',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})