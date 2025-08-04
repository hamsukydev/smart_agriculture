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
      ad_campaigns: {
        Row: {
          ad_type: string
          ad_unit_id: string
          created_at: string
          created_by: string
          description: string | null
          id: string
          is_active: boolean
          placement: string
          revenue_per_click: number
          revenue_per_view: number
          target_audience: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          ad_type?: string
          ad_unit_id: string
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          is_active?: boolean
          placement?: string
          revenue_per_click?: number
          revenue_per_view?: number
          target_audience?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          ad_type?: string
          ad_unit_id?: string
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          is_active?: boolean
          placement?: string
          revenue_per_click?: number
          revenue_per_view?: number
          target_audience?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      financial_transactions: {
        Row: {
          amount: number
          created_at: string
          currency: string
          description: string
          id: string
          payment_method: string | null
          processed_by: string
          receipt_url: string | null
          reference_id: string | null
          reference_type: string | null
          status: string
          transaction_date: string
          transaction_number: string
          transaction_type: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          description: string
          id?: string
          payment_method?: string | null
          processed_by: string
          receipt_url?: string | null
          reference_id?: string | null
          reference_type?: string | null
          status?: string
          transaction_date?: string
          transaction_number: string
          transaction_type: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          description?: string
          id?: string
          payment_method?: string | null
          processed_by?: string
          receipt_url?: string | null
          reference_id?: string | null
          reference_type?: string | null
          status?: string
          transaction_date?: string
          transaction_number?: string
          transaction_type?: string
        }
        Relationships: []
      }
      gas_types: {
        Row: {
          chemical_formula: string | null
          created_at: string
          id: string
          name: string
          safety_classification: string | null
          storage_requirements: string | null
          unit_of_measurement: string
        }
        Insert: {
          chemical_formula?: string | null
          created_at?: string
          id?: string
          name: string
          safety_classification?: string | null
          storage_requirements?: string | null
          unit_of_measurement?: string
        }
        Update: {
          chemical_formula?: string | null
          created_at?: string
          id?: string
          name?: string
          safety_classification?: string | null
          storage_requirements?: string | null
          unit_of_measurement?: string
        }
        Relationships: []
      }
      inventory_items: {
        Row: {
          created_at: string
          current_quantity: number
          description: string | null
          gas_type_id: string
          id: string
          is_active: boolean
          item_code: string
          location_in_plant: string | null
          maximum_stock_level: number | null
          minimum_stock_level: number
          unit_cost: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_quantity?: number
          description?: string | null
          gas_type_id: string
          id?: string
          is_active?: boolean
          item_code: string
          location_in_plant?: string | null
          maximum_stock_level?: number | null
          minimum_stock_level?: number
          unit_cost?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_quantity?: number
          description?: string | null
          gas_type_id?: string
          id?: string
          is_active?: boolean
          item_code?: string
          location_in_plant?: string | null
          maximum_stock_level?: number | null
          minimum_stock_level?: number
          unit_cost?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_items_gas_type_id_fkey"
            columns: ["gas_type_id"]
            isOneToOne: false
            referencedRelation: "gas_types"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_movements: {
        Row: {
          cost_per_unit: number | null
          id: string
          inventory_item_id: string
          movement_date: string
          movement_type: string
          notes: string | null
          performed_by: string
          quantity_after: number
          quantity_before: number
          quantity_changed: number
          reason: string
          reference_id: string | null
          reference_type: string | null
          total_cost: number | null
        }
        Insert: {
          cost_per_unit?: number | null
          id?: string
          inventory_item_id: string
          movement_date?: string
          movement_type: string
          notes?: string | null
          performed_by: string
          quantity_after: number
          quantity_before: number
          quantity_changed: number
          reason: string
          reference_id?: string | null
          reference_type?: string | null
          total_cost?: number | null
        }
        Update: {
          cost_per_unit?: number | null
          id?: string
          inventory_item_id?: string
          movement_date?: string
          movement_type?: string
          notes?: string | null
          performed_by?: string
          quantity_after?: number
          quantity_before?: number
          quantity_changed?: number
          reason?: string
          reference_id?: string | null
          reference_type?: string | null
          total_cost?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_movements_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id"]
          },
        ]
      }
      market_analysis: {
        Row: {
          analysis_data: Json | null
          bias: string | null
          created_at: string
          id: string
          imbalances: Json | null
          key_levels: Json | null
          liquidity_zones: Json | null
          market_structure: string | null
          order_blocks: Json | null
          pair: string
          timeframe: string
          trend_direction: string | null
        }
        Insert: {
          analysis_data?: Json | null
          bias?: string | null
          created_at?: string
          id?: string
          imbalances?: Json | null
          key_levels?: Json | null
          liquidity_zones?: Json | null
          market_structure?: string | null
          order_blocks?: Json | null
          pair: string
          timeframe: string
          trend_direction?: string | null
        }
        Update: {
          analysis_data?: Json | null
          bias?: string | null
          created_at?: string
          id?: string
          imbalances?: Json | null
          key_levels?: Json | null
          liquidity_zones?: Json | null
          market_structure?: string | null
          order_blocks?: Json | null
          pair?: string
          timeframe?: string
          trend_direction?: string | null
        }
        Relationships: []
      }
      navigation_menus: {
        Row: {
          created_at: string
          icon: string | null
          id: string
          is_active: boolean
          parent_id: string | null
          position: number
          slug: string
          title: string
          updated_at: string
          url: string | null
        }
        Insert: {
          created_at?: string
          icon?: string | null
          id?: string
          is_active?: boolean
          parent_id?: string | null
          position?: number
          slug: string
          title: string
          updated_at?: string
          url?: string | null
        }
        Update: {
          created_at?: string
          icon?: string | null
          id?: string
          is_active?: boolean
          parent_id?: string | null
          position?: number
          slug?: string
          title?: string
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "navigation_menus_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "navigation_menus"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          content: string | null
          created_at: string
          created_by: string
          featured_image: string | null
          id: string
          is_published: boolean
          meta_description: string | null
          page_type: string
          slug: string
          template: string | null
          title: string
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          created_by: string
          featured_image?: string | null
          id?: string
          is_published?: boolean
          meta_description?: string | null
          page_type?: string
          slug: string
          template?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          created_by?: string
          featured_image?: string | null
          id?: string
          is_published?: boolean
          meta_description?: string | null
          page_type?: string
          slug?: string
          template?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      payment_settings: {
        Row: {
          auto_payment_enabled: boolean
          created_at: string
          created_by: string
          id: string
          maximum_auto_payment_amount: number | null
          payment_account_details: Json | null
          payment_method: string
          payment_terms_days: number
          supplier_id: string
          updated_at: string
        }
        Insert: {
          auto_payment_enabled?: boolean
          created_at?: string
          created_by: string
          id?: string
          maximum_auto_payment_amount?: number | null
          payment_account_details?: Json | null
          payment_method?: string
          payment_terms_days?: number
          supplier_id: string
          updated_at?: string
        }
        Update: {
          auto_payment_enabled?: boolean
          created_at?: string
          created_by?: string
          id?: string
          maximum_auto_payment_amount?: number | null
          payment_account_details?: Json | null
          payment_method?: string
          payment_terms_days?: number
          supplier_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_settings_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      payouts: {
        Row: {
          amount: number
          created_at: string
          id: string
          notes: string | null
          payment_details: Json | null
          payment_method: string
          processed_at: string | null
          processed_by: string | null
          requested_at: string
          status: string
          transaction_id: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          notes?: string | null
          payment_details?: Json | null
          payment_method?: string
          processed_at?: string | null
          processed_by?: string | null
          requested_at?: string
          status?: string
          transaction_id?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          notes?: string | null
          payment_details?: Json | null
          payment_method?: string
          processed_at?: string | null
          processed_by?: string | null
          requested_at?: string
          status?: string
          transaction_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          author_id: string
          category: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          published_at: string | null
          slug: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          category?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          slug: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          category?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published_at?: string | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string
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
      purchase_order_items: {
        Row: {
          created_at: string
          id: string
          inventory_item_id: string
          purchase_order_id: string
          quantity: number
          received_quantity: number | null
          total_price: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          id?: string
          inventory_item_id: string
          purchase_order_id: string
          quantity: number
          received_quantity?: number | null
          total_price: number
          unit_price: number
        }
        Update: {
          created_at?: string
          id?: string
          inventory_item_id?: string
          purchase_order_id?: string
          quantity?: number
          received_quantity?: number | null
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_items_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_order_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_orders: {
        Row: {
          approved_by: string | null
          created_at: string
          created_by: string
          expected_delivery_date: string | null
          id: string
          notes: string | null
          order_date: string
          payment_date: string | null
          payment_status: string
          po_number: string
          status: string
          subtotal: number
          supplier_id: string
          tax_amount: number
          total_amount: number
          updated_at: string
        }
        Insert: {
          approved_by?: string | null
          created_at?: string
          created_by: string
          expected_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          payment_date?: string | null
          payment_status?: string
          po_number: string
          status?: string
          subtotal?: number
          supplier_id: string
          tax_amount?: number
          total_amount?: number
          updated_at?: string
        }
        Update: {
          approved_by?: string | null
          created_at?: string
          created_by?: string
          expected_delivery_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          payment_date?: string | null
          payment_status?: string
          po_number?: string
          status?: string
          subtotal?: number
          supplier_id?: string
          tax_amount?: number
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      receipts: {
        Row: {
          file_url: string | null
          generated_at: string
          id: string
          receipt_data: Json
          receipt_number: string
          sent_to_email: string | null
          transaction_id: string
        }
        Insert: {
          file_url?: string | null
          generated_at?: string
          id?: string
          receipt_data: Json
          receipt_number: string
          sent_to_email?: string | null
          transaction_id: string
        }
        Update: {
          file_url?: string | null
          generated_at?: string
          id?: string
          receipt_data?: Json
          receipt_number?: string
          sent_to_email?: string | null
          transaction_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "receipts_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "financial_transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          bonus_amount: number | null
          created_at: string | null
          id: string
          paid_at: string | null
          referred_id: string
          referrer_id: string
          status: string
        }
        Insert: {
          bonus_amount?: number | null
          created_at?: string | null
          id?: string
          paid_at?: string | null
          referred_id: string
          referrer_id: string
          status?: string
        }
        Update: {
          bonus_amount?: number | null
          created_at?: string | null
          id?: string
          paid_at?: string | null
          referred_id?: string
          referrer_id?: string
          status?: string
        }
        Relationships: []
      }
      revenue_shares: {
        Row: {
          admin_earnings: number
          campaign_id: string
          created_at: string
          gross_revenue: number
          id: string
          interaction_id: string
          processed_at: string | null
          status: string
          user_earnings: number
          user_id: string
          user_percentage: number
        }
        Insert: {
          admin_earnings: number
          campaign_id: string
          created_at?: string
          gross_revenue: number
          id?: string
          interaction_id: string
          processed_at?: string | null
          status?: string
          user_earnings: number
          user_id: string
          user_percentage: number
        }
        Update: {
          admin_earnings?: number
          campaign_id?: string
          created_at?: string
          gross_revenue?: number
          id?: string
          interaction_id?: string
          processed_at?: string | null
          status?: string
          user_earnings?: number
          user_id?: string
          user_percentage?: number
        }
        Relationships: [
          {
            foreignKeyName: "revenue_shares_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "ad_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "revenue_shares_interaction_id_fkey"
            columns: ["interaction_id"]
            isOneToOne: false
            referencedRelation: "user_ad_interactions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          created_at: string
          description: string | null
          features: Json | null
          id: string
          is_active: boolean
          max_daily_ads: number | null
          name: string
          price: number
          revenue_share_percentage: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean
          max_daily_ads?: number | null
          name: string
          price?: number
          revenue_share_percentage?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean
          max_daily_ads?: number | null
          name?: string
          price?: number
          revenue_share_percentage?: number
          updated_at?: string
        }
        Relationships: []
      }
      suppliers: {
        Row: {
          address: string | null
          company_name: string
          contact_person: string | null
          created_at: string
          email: string | null
          id: string
          is_active: boolean
          payment_terms: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          company_name: string
          contact_person?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          payment_terms?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          company_name?: string
          contact_person?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          payment_terms?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      task_completions: {
        Row: {
          completed_at: string | null
          id: string
          review_notes: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          reward_amount: number
          status: string
          submission_data: Json | null
          task_id: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          id?: string
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          reward_amount: number
          status?: string
          submission_data?: Json | null
          task_id: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          id?: string
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          reward_amount?: number
          status?: string
          submission_data?: Json | null
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_completions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          created_at: string | null
          created_by: string
          current_completions: number | null
          description: string
          expires_at: string | null
          id: string
          is_active: boolean | null
          max_completions: number | null
          requirements: Json | null
          reward_amount: number
          task_type: string
          title: string
        }
        Insert: {
          created_at?: string | null
          created_by: string
          current_completions?: number | null
          description: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          max_completions?: number | null
          requirements?: Json | null
          reward_amount: number
          task_type: string
          title: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          current_completions?: number | null
          description?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          max_completions?: number | null
          requirements?: Json | null
          reward_amount?: number
          task_type?: string
          title?: string
        }
        Relationships: []
      }
      telegram_settings: {
        Row: {
          bot_token: string | null
          chat_id: string | null
          created_at: string
          id: string
          is_active: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          bot_token?: string | null
          chat_id?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          bot_token?: string | null
          chat_id?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      trading_positions: {
        Row: {
          closed_at: string | null
          created_at: string
          current_price: number | null
          entry_price: number
          id: string
          lot_size: number
          opened_at: string
          pair: string
          pnl: number | null
          position_type: string
          signal_id: string | null
          status: string
          stop_loss: number | null
          take_profit: number | null
          updated_at: string
        }
        Insert: {
          closed_at?: string | null
          created_at?: string
          current_price?: number | null
          entry_price: number
          id?: string
          lot_size: number
          opened_at?: string
          pair: string
          pnl?: number | null
          position_type: string
          signal_id?: string | null
          status?: string
          stop_loss?: number | null
          take_profit?: number | null
          updated_at?: string
        }
        Update: {
          closed_at?: string | null
          created_at?: string
          current_price?: number | null
          entry_price?: number
          id?: string
          lot_size?: number
          opened_at?: string
          pair?: string
          pnl?: number | null
          position_type?: string
          signal_id?: string | null
          status?: string
          stop_loss?: number | null
          take_profit?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trading_positions_signal_id_fkey"
            columns: ["signal_id"]
            isOneToOne: false
            referencedRelation: "trading_signals"
            referencedColumns: ["id"]
          },
        ]
      }
      trading_signals: {
        Row: {
          confidence_score: number | null
          created_at: string
          entry_price: number
          expires_at: string | null
          id: string
          imbalance_detected: boolean | null
          liquidity_levels: Json | null
          market_structure: string | null
          order_block_type: string | null
          pair: string
          signal_type: string
          status: string
          stop_loss: number | null
          strategy_used: string
          take_profit: number | null
          telegram_message_id: string | null
          telegram_sent: boolean | null
          updated_at: string
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string
          entry_price: number
          expires_at?: string | null
          id?: string
          imbalance_detected?: boolean | null
          liquidity_levels?: Json | null
          market_structure?: string | null
          order_block_type?: string | null
          pair: string
          signal_type: string
          status?: string
          stop_loss?: number | null
          strategy_used?: string
          take_profit?: number | null
          telegram_message_id?: string | null
          telegram_sent?: boolean | null
          updated_at?: string
        }
        Update: {
          confidence_score?: number | null
          created_at?: string
          entry_price?: number
          expires_at?: string | null
          id?: string
          imbalance_detected?: boolean | null
          liquidity_levels?: Json | null
          market_structure?: string | null
          order_block_type?: string | null
          pair?: string
          signal_type?: string
          status?: string
          stop_loss?: number | null
          strategy_used?: string
          take_profit?: number | null
          telegram_message_id?: string | null
          telegram_sent?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          baku_transfer_id: string | null
          created_at: string | null
          description: string
          id: string
          processed_at: string | null
          processed_by: string | null
          reference_id: string | null
          status: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          baku_transfer_id?: string | null
          created_at?: string | null
          description: string
          id?: string
          processed_at?: string | null
          processed_by?: string | null
          reference_id?: string | null
          status?: string
          transaction_type: string
          user_id: string
        }
        Update: {
          amount?: number
          baku_transfer_id?: string | null
          created_at?: string | null
          description?: string
          id?: string
          processed_at?: string | null
          processed_by?: string | null
          reference_id?: string | null
          status?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: []
      }
      user_ad_interactions: {
        Row: {
          campaign_id: string
          created_at: string
          id: string
          interaction_type: string
          ip_address: unknown | null
          revenue_earned: number
          user_agent: string | null
          user_id: string
          user_share: number
        }
        Insert: {
          campaign_id: string
          created_at?: string
          id?: string
          interaction_type: string
          ip_address?: unknown | null
          revenue_earned?: number
          user_agent?: string | null
          user_id: string
          user_share?: number
        }
        Update: {
          campaign_id?: string
          created_at?: string
          id?: string
          interaction_type?: string
          ip_address?: unknown | null
          revenue_earned?: number
          user_agent?: string | null
          user_id?: string
          user_share?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_ad_interactions_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "ad_campaigns"
            referencedColumns: ["id"]
          },
        ]
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
      user_subscriptions: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          plan_id: string
          started_at: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_id: string
          started_at?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_id?: string
          started_at?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      website_settings: {
        Row: {
          description: string | null
          id: string
          setting_key: string
          setting_type: string
          setting_value: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          setting_key: string
          setting_type?: string
          setting_value?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          setting_key?: string
          setting_type?: string
          setting_value?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_po_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_transaction_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
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
