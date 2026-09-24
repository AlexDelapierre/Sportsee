export interface HeartRate {
  min: number;
  max: number;
  average: number;
}

export interface ActivitySession {
  date: string; // ISO YYYY-MM-DD
  distance: number; // km
  duration: number; // minutes
  heartRate: HeartRate;
  caloriesBurned: number;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  createdAt: string;
  age: number;
  weight: number;
  height: number;
  profilePicture: string;
}

export interface UserStatistics {
  totalDistance: string; // backend uses .toFixed() for this one, that returns a string not a number
  totalSessions: number;
  totalDuration: number;
}

export interface UserInfoResponse {
  profile: UserProfile;
  statistics: UserStatistics;
}

export interface LoginResponse {
  token: string;
  userId: string;
}
