export type QiitaItem = {
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: QiitaGroup;
  id: string;
  likes_count: number;
  page_views_count: number;
  private: boolean;
  reactions_count: number;
  rendered_body: string;
  stocks_count: number;
  tags: QiitaTag[];
  team_membership: QiitaTeamMembership;
  title: string;
  updated_at: string;
  url: string;
  user: QiitaUser;
};

export type QiitaGroup = {
  created_at: string;
  description: string;
  name: string;
  private: boolean;
  updated_at: string;
  url_name: string;
};

export type QiitaTag = {
  name: string;
  versions: string[];
};

export type QiitaTeamMembership = {
  name: string;
};

export type QiitaUser = {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string;
  website_url: string;
};

export type Post = {
  created_at: string;
  title: string;
  url: string;
};
