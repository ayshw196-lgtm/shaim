// User Types
export type UserRole = 'user' | 'moderator' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar_url?: string;
  cover_image_url?: string;
  bio?: string;
  name_color?: string;
  points: number;
  level: number;
  created_at: string;
  updated_at: string;
}

// Avatar Customization Types
export interface AvatarCustomization {
  id: string;
  user_id: string;
  hair_style: string;
  hair_color: string;
  clothing: string;
  clothing_color: string;
  accessories: string[];
  skin_tone: string;
  created_at: string;
  updated_at: string;
}

// Task Types
export interface Task {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  start_time: string;
  duration_hours: number;
  duration_minutes: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  created_at: string;
  completed_at?: string;
  updated_at: string;
}

// Achievement Types
export interface Achievement {
  id: string;
  user_id: string;
  badge_id: string;
  achieved_at: string;
  created_at: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon_url: string;
  requirement: number;
  requirement_type: 'tasks_completed' | 'points_earned' | 'streak_days';
  created_at: string;
}

// Character Types
export type CharacterName = 'miao' | 'yara' | 'yaseen' | 'isho';

export interface Character {
  id: string;
  name: CharacterName;
  display_name: string;
  avatar_url: string;
  bio: string;
  personality: string;
  created_at: string;
}

// Message Types
export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string; // character_id or admin_id
  content: string;
  message_type: 'user_to_character' | 'user_to_admin' | 'character_reply' | 'admin_reply';
  is_ai_generated: boolean;
  created_at: string;
  updated_at: string;
}

// Stream Types
export interface Stream {
  id: string;
  admin_id: string;
  title: string;
  status: 'active' | 'inactive';
  started_at?: string;
  ended_at?: string;
  created_at: string;
}

export interface StreamMessage {
  id: string;
  stream_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}

// Game Types
export interface Game {
  id: string;
  name: string;
  description?: string;
  image_url: string;
  url: string;
  added_by: string; // admin_id
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// News/Feed Types
export interface NewsPost {
  id: string;
  admin_id: string;
  title: string;
  content: string;
  image_url?: string;
  category: 'update' | 'character_story' | 'event' | 'tutorial';
  is_published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

// Island/House Types
export interface House {
  id: string;
  user_id: string;
  level: number;
  style: string;
  custom_name?: string;
  interior_items: string[];
  created_at: string;
  updated_at: string;
}

// Reward Types
export interface Reward {
  id: string;
  user_id: string;
  reward_type: 'points' | 'badge' | 'avatar_upgrade';
  amount?: number;
  badge_id?: string;
  description: string;
  claimed_at?: string;
  created_at: string;
}

// Notification Types
export type NotificationType = 'task_start' | 'task_reminder' | 'task_complete' | 'reward' | 'stream_start' | 'message' | 'friend_action';

export interface Notification {
  id: string;
  user_id: string;
  type: NotificationType;
  title: string;
  content: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
}

// Friend/Interaction Types
export interface Friendship {
  id: string;
  user_id_1: string;
  user_id_2: string;
  status: 'pending' | 'accepted' | 'blocked';
  created_at: string;
  updated_at: string;
}
