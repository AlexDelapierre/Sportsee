import type { UserInfoResponse } from "~/types/api";

export interface User {
  firstName: string;
  lastName: string;
  profilePicture: string;
  createdAt: string;
  memberSince: string;
  age: number;
  height: string;
  weight: number;
  totalDistance: number;
  totalSessions: number;
  totalHours: number;
  totalMinutes: number;
}

export function formatUserInfo(userInfo: UserInfoResponse): User {
  const meters = Math.floor(userInfo.profile.height / 100);
  const centimeters = String(userInfo.profile.height % 100).padStart(2, "0");

  return {
    firstName: userInfo.profile.firstName,
    lastName: userInfo.profile.lastName,
    profilePicture: userInfo.profile.profilePicture,
    createdAt: userInfo.profile.createdAt,
    memberSince: new Date(userInfo.profile.createdAt).toLocaleDateString(
      "fr-FR",
      { day: "numeric", month: "long", year: "numeric" }
    ),
    age: userInfo.profile.age,
    height: `${meters}m${centimeters}`,
    weight: userInfo.profile.weight,
    totalDistance: Math.round(Number(userInfo.statistics.totalDistance)),
    totalSessions: userInfo.statistics.totalSessions,
    totalHours: Math.floor(userInfo.statistics.totalDuration / 60),
    totalMinutes: userInfo.statistics.totalDuration % 60,
  };
}