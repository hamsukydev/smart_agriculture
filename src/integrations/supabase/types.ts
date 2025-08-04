export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      crops: {
        Row: {
          area_hectares: number | null
          created_at: string
          crop_type: string
          expected_harvest_date: string | null
          farm_id: string
          id: string
          notes: string | null
          planting_date: string | null
          status: string | null
          updated_at: string
          user_id: string
          variety: string | null
        }
        Insert: {
          area_hectares?: number | null
          created_at?: string
          crop_type: string
          expected_harvest_date?: string | null
          farm_id: string
          id?: string
          notes?: string | null
          planting_date?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
          variety?: string | null
        }
        Update: {
          area_hectares?: number | null
          created_at?: string
          crop_type?: string
          expected_harvest_date?: string | null
          farm_id?: string
          id?: string
          notes?: string | null
          planting_date?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
          variety?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crops_farm_id_fkey"
            columns: ["farm_id"]
            isOneToOne: false
            referencedRelation: "farms"
            referencedColumns: ["id"]
          },
        ]
      }
      disease_detections: {
        Row: {
          confidence: number
          created_at: string
          crop_type: string | null
          disease_name: string
          id: string
          image_url: string
          location_data: Json | null
          prevention: string | null
          severity: string
          treatment: string | null
          updated_at: string
          user_id: string | null
          weather_conditions: Json | null
        }
        Insert: {
          confidence: number
          created_at?: string
          crop_type?: string | null
          disease_name: string
          id?: string
          image_url: string
          location_data?: Json | null
          prevention?: string | null
          severity: string
          treatment?: string | null
          updated_at?: string
          user_id?: string | null
          weather_conditions?: Json | null
        }
        Update: {
          confidence?: number
          created_at?: string
          crop_type?: string | null
          disease_name?: string
          id?: string
          image_url?: string
          location_data?: Json | null
          prevention?: string | null
          severity?: string
          treatment?: string | null
          updated_at?: string
          user_id?: string | null
          weather_conditions?: Json | null
        }
        Relationships: []
      }
      farms: {
        Row: {
          coordinates: Json | null
          created_at: string
          id: string
          location: string | null
          name: string
          size_hectares: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          coordinates?: Json | null
          created_at?: string
          id?: string
          location?: string | null
          name: string
          size_hectares?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          coordinates?: Json | null
          created_at?: string
          id?: string
          location?: string | null
          name?: string
          size_hectares?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          available_balance: number | null
          baku_wallet_id: string | null
          created_at: string | null
          email: string
          full_name: string
          id: string
          phone: string | null
          referral_code: string | null
          referred_by: string | null
          total_earnings: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          available_balance?: number | null
          baku_wallet_id?: string | null
          created_at?: string | null
          email: string
          full_name: string
          id?: string
          phone?: string | null
          referral_code?: string | null
          referred_by?: string | null
          total_earnings?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          available_balance?: number | null
          baku_wallet_id?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          phone?: string | null
          referral_code?: string | null
          referred_by?: string | null
          total_earnings?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          created_at: string
          farm_size_category: string | null
          id: string
          location: string | null
          notification_settings: Json | null
          preferred_language: string | null
          primary_crops: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          farm_size_category?: string | null
          id?: string
          location?: string | null
          notification_settings?: Json | null
          preferred_language?: string | null
          primary_crops?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          farm_size_category?: string | null
          id?: string
          location?: string | null
          notification_settings?: Json | null
          preferred_language?: string | null
          primary_crops?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
      weather_alerts: {
        Row: {
          alert_type: string
          created_at: string
          expires_at: string | null
          id: string
          is_read: boolean | null
          location: string | null
          message: string
          priority: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          alert_type: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_read?: boolean | null
          location?: string | null
          message: string
          priority?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          alert_type?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_read?: boolean | null
          location?: string | null
          message?: string
          priority?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      user_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["admin", "user"],
    },
  },
} as const
