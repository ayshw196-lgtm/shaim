export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: 'user' | 'moderator' | 'admin';
          avatar_url: string | null;
          cover_image_url: string | null;
          bio: string | null;
          name_color: string | null;
          points: number;
          level: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          role?: 'user' | 'moderator' | 'admin';
          avatar_url?: string | null;
          cover_image_url?: string | null;
          bio?: string | null;
          name_color?: string | null;
          points?: number;
          level?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string;
          name?: string;
          role?: 'user' | 'moderator' | 'admin';
          avatar_url?: string | null;
          cover_image_url?: string | null;
          bio?: string | null;
          name_color?: string | null;
          points?: number;
          level?: number;
          updated_at?: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          start_time: string;
          duration_hours: number;
          duration_minutes: number;
          status: 'pending' | 'active' | 'completed' | 'cancelled';
          created_at: string;
          completed_at: string | null;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          title: string;
          description?: string | null;
          start_time: string;
          duration_hours: number;
          duration_minutes: number;
          status?: 'pending' | 'active' | 'completed' | 'cancelled';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          description?: string | null;
          start_time?: string;
          duration_hours?: number;
          duration_minutes?: number;
          status?: 'pending' | 'active' | 'completed' | 'cancelled';
          completed_at?: string | null;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          sender_id: string;
          recipient_id: string;
          content: string;
          message_type: 'user_to_character' | 'user_to_admin' | 'character_reply' | 'admin_reply';
          is_ai_generated: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          sender_id: string;
          recipient_id: string;
          content: string;
          message_type: 'user_to_character' | 'user_to_admin' | 'character_reply' | 'admin_reply';
          is_ai_generated?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          content?: string;
          updated_at?: string;
        };
      };
      games: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          image_url: string;
          url: string;
          added_by: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          description?: string | null;
          image_url: string;
          url: string;
          added_by: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          description?: string | null;
          image_url?: string;
          url?: string;
          is_active?: boolean;
          updated_at?: string;
        };
      };
      news_posts: {
        Row: {
          id: string;
          admin_id: string;
          title: string;
          content: string;
          image_url: string | null;
          category: 'update' | 'character_story' | 'event' | 'tutorial';
          is_published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          admin_id: string;
          title: string;
          content: string;
          image_url?: string | null;
          category: 'update' | 'character_story' | 'event' | 'tutorial';
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          content?: string;
          image_url?: string | null;
          category?: 'update' | 'character_story' | 'event' | 'tutorial';
          is_published?: boolean;
          published_at?: string | null;
          updated_at?: string;
        };
      };
    };
  };
};
