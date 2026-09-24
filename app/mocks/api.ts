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

export const MOCK_CREDENTIALS: Record<
  string,
  { password: string; userId: string }
> = {
  "sophiemartin": {
    "password": "password123",
    "userId": "user123"
  },
  "emmaleroy": {
    "password": "password789",
    "userId": "user789"
  },
  "marcdubois": {
    "password": "password456",
    "userId": "user456"
  }
};

export const MOCK_USER_INFO: Record<string, UserInfoResponse> = {
  "user123": {
    "profile": {
      "firstName": "Sophie",
      "lastName": "Martin",
      "createdAt": "2025-01-01",
      "age": 32,
      "weight": 60,
      "height": 165,
      "profilePicture": "http://localhost:8000/images/sophie.jpg"
    },
    "statistics": {
      "totalDistance": "2250.2",
      "totalSessions": 348,
      "totalDuration": 14625
    }
  },
  "user789": {
    "profile": {
      "firstName": "Emma",
      "lastName": "Leroy",
      "createdAt": "2025-01-01",
      "age": 28,
      "weight": 62,
      "height": 170,
      "profilePicture": "http://localhost:8000/images/emma.jpg"
    },
    "statistics": {
      "totalDistance": "3791.4",
      "totalSessions": 607,
      "totalDuration": 22624
    }
  },
  "user456": {
    "profile": {
      "firstName": "Marc",
      "lastName": "Dubois",
      "createdAt": "2025-01-01",
      "age": 45,
      "weight": 85,
      "height": 180,
      "profilePicture": "http://localhost:8000/images/marc.jpg"
    },
    "statistics": {
      "totalDistance": "501.7",
      "totalSessions": 130,
      "totalDuration": 3555
    }
  }
};

export const MOCK_USER_ACTIVITY: Record<string, ActivitySession[]> = {
  "user123": [
    {
      "date": "2025-01-04",
      "distance": 5.8,
      "duration": 38,
      "heartRate": {
        "min": 140,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 422
    },
    {
      "date": "2025-01-05",
      "distance": 3.2,
      "duration": 20,
      "heartRate": {
        "min": 148,
        "max": 184,
        "average": 171
      },
      "caloriesBurned": 248
    },
    {
      "date": "2025-01-09",
      "distance": 6.4,
      "duration": 42,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 163
      },
      "caloriesBurned": 468
    },
    {
      "date": "2025-01-12",
      "distance": 7.5,
      "duration": 50,
      "heartRate": {
        "min": 138,
        "max": 178,
        "average": 162
      },
      "caloriesBurned": 532
    },
    {
      "date": "2025-01-19",
      "distance": 5.1,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 165
      },
      "caloriesBurned": 378
    },
    {
      "date": "2025-01-25",
      "distance": 4.8,
      "duration": 32,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 166
      },
      "caloriesBurned": 352
    },
    {
      "date": "2025-01-26",
      "distance": 3.5,
      "duration": 22,
      "heartRate": {
        "min": 146,
        "max": 183,
        "average": 170
      },
      "caloriesBurned": 265
    },
    {
      "date": "2025-02-02",
      "distance": 6.2,
      "duration": 40,
      "heartRate": {
        "min": 142,
        "max": 177,
        "average": 164
      },
      "caloriesBurned": 455
    },
    {
      "date": "2025-02-05",
      "distance": 8,
      "duration": 52,
      "heartRate": {
        "min": 140,
        "max": 178,
        "average": 162
      },
      "caloriesBurned": 565
    },
    {
      "date": "2025-02-08",
      "distance": 4.5,
      "duration": 30,
      "heartRate": {
        "min": 144,
        "max": 180,
        "average": 167
      },
      "caloriesBurned": 335
    },
    {
      "date": "2025-02-15",
      "distance": 9.2,
      "duration": 62,
      "heartRate": {
        "min": 138,
        "max": 179,
        "average": 161
      },
      "caloriesBurned": 645
    },
    {
      "date": "2025-02-22",
      "distance": 5.5,
      "duration": 36,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 165
      },
      "caloriesBurned": 398
    },
    {
      "date": "2025-02-23",
      "distance": 3.8,
      "duration": 25,
      "heartRate": {
        "min": 145,
        "max": 182,
        "average": 168
      },
      "caloriesBurned": 285
    },
    {
      "date": "2025-03-01",
      "distance": 7.8,
      "duration": 50,
      "heartRate": {
        "min": 140,
        "max": 178,
        "average": 162
      },
      "caloriesBurned": 545
    },
    {
      "date": "2025-03-02",
      "distance": 4,
      "duration": 26,
      "heartRate": {
        "min": 144,
        "max": 180,
        "average": 167
      },
      "caloriesBurned": 298
    },
    {
      "date": "2025-03-05",
      "distance": 3.6,
      "duration": 24,
      "heartRate": {
        "min": 145,
        "max": 182,
        "average": 169
      },
      "caloriesBurned": 275
    },
    {
      "date": "2025-03-09",
      "distance": 10.5,
      "duration": 68,
      "heartRate": {
        "min": 136,
        "max": 179,
        "average": 159
      },
      "caloriesBurned": 720
    },
    {
      "date": "2025-03-15",
      "distance": 6.8,
      "duration": 44,
      "heartRate": {
        "min": 141,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 485
    },
    {
      "date": "2025-03-16",
      "distance": 4.2,
      "duration": 28,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 166
      },
      "caloriesBurned": 320
    },
    {
      "date": "2025-03-22",
      "distance": 5.3,
      "duration": 34,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 165
      },
      "caloriesBurned": 382
    },
    {
      "date": "2025-03-27",
      "distance": 11,
      "duration": 72,
      "heartRate": {
        "min": 135,
        "max": 179,
        "average": 158
      },
      "caloriesBurned": 755
    },
    {
      "date": "2025-03-29",
      "distance": 4.7,
      "duration": 30,
      "heartRate": {
        "min": 144,
        "max": 180,
        "average": 167
      },
      "caloriesBurned": 338
    },
    {
      "date": "2025-03-30",
      "distance": 6,
      "duration": 38,
      "heartRate": {
        "min": 142,
        "max": 179,
        "average": 164
      },
      "caloriesBurned": 425
    },
    {
      "date": "2025-04-06",
      "distance": 7.2,
      "duration": 46,
      "heartRate": {
        "min": 139,
        "max": 179,
        "average": 163
      },
      "caloriesBurned": 495
    },
    {
      "date": "2025-04-10",
      "distance": 5.5,
      "duration": 36,
      "heartRate": {
        "min": 141,
        "max": 179,
        "average": 165
      },
      "caloriesBurned": 390
    },
    {
      "date": "2025-04-13",
      "distance": 9.8,
      "duration": 65,
      "heartRate": {
        "min": 138,
        "max": 180,
        "average": 161
      },
      "caloriesBurned": 680
    },
    {
      "date": "2025-04-20",
      "distance": 4.5,
      "duration": 30,
      "heartRate": {
        "min": 143,
        "max": 180,
        "average": 167
      },
      "caloriesBurned": 328
    },
    {
      "date": "2025-04-27",
      "distance": 6.7,
      "duration": 43,
      "heartRate": {
        "min": 141,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 472
    },
    {
      "date": "2025-05-01",
      "distance": 5,
      "duration": 32,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 166
      },
      "caloriesBurned": 358
    },
    {
      "date": "2025-05-04",
      "distance": 8.3,
      "duration": 54,
      "heartRate": {
        "min": 139,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 578
    },
    {
      "date": "2025-05-11",
      "distance": 10.2,
      "duration": 68,
      "heartRate": {
        "min": 137,
        "max": 180,
        "average": 160
      },
      "caloriesBurned": 705
    },
    {
      "date": "2025-05-18",
      "distance": 7,
      "duration": 45,
      "heartRate": {
        "min": 140,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 490
    },
    {
      "date": "2025-05-24",
      "distance": 5.2,
      "duration": 34,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 165
      },
      "caloriesBurned": 370
    },
    {
      "date": "2025-05-29",
      "distance": 6.5,
      "duration": 42,
      "heartRate": {
        "min": 141,
        "max": 178,
        "average": 164
      },
      "caloriesBurned": 460
    },
    {
      "date": "2025-06-01",
      "distance": 4.8,
      "duration": 31,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 166
      },
      "caloriesBurned": 345
    },
    {
      "date": "2025-06-07",
      "distance": 9.5,
      "duration": 62,
      "heartRate": {
        "min": 138,
        "max": 180,
        "average": 161
      },
      "caloriesBurned": 665
    },
    {
      "date": "2025-06-12",
      "distance": 6.3,
      "duration": 40,
      "heartRate": {
        "min": 142,
        "max": 177,
        "average": 164
      },
      "caloriesBurned": 445
    },
    {
      "date": "2025-06-15",
      "distance": 4.5,
      "duration": 29,
      "heartRate": {
        "min": 144,
        "max": 179,
        "average": 167
      },
      "caloriesBurned": 325
    },
    {
      "date": "2025-06-22",
      "distance": 11.2,
      "duration": 72,
      "heartRate": {
        "min": 135,
        "max": 180,
        "average": 159
      },
      "caloriesBurned": 765
    },
    {
      "date": "2025-06-29",
      "distance": 5.7,
      "duration": 37,
      "heartRate": {
        "min": 142,
        "max": 177,
        "average": 164
      },
      "caloriesBurned": 405
    },
    {
      "date": "2025-07-02",
      "distance": 4.6,
      "duration": 30,
      "heartRate": {
        "min": 144,
        "max": 179,
        "average": 167
      },
      "caloriesBurned": 330
    },
    {
      "date": "2025-07-06",
      "distance": 7.8,
      "duration": 50,
      "heartRate": {
        "min": 140,
        "max": 178,
        "average": 162
      },
      "caloriesBurned": 540
    },
    {
      "date": "2025-07-13",
      "distance": 6,
      "duration": 39,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 164
      },
      "caloriesBurned": 430
    },
    {
      "date": "2025-07-17",
      "distance": 4.3,
      "duration": 28,
      "heartRate": {
        "min": 144,
        "max": 180,
        "average": 168
      },
      "caloriesBurned": 315
    },
    {
      "date": "2025-07-20",
      "distance": 9,
      "duration": 58,
      "heartRate": {
        "min": 139,
        "max": 179,
        "average": 161
      },
      "caloriesBurned": 630
    },
    {
      "date": "2025-07-27",
      "distance": 5.3,
      "duration": 35,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 165
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-08-03",
      "distance": 8.5,
      "duration": 55,
      "heartRate": {
        "min": 139,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 590
    },
    {
      "date": "2025-08-07",
      "distance": 4.9,
      "duration": 32,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 166
      },
      "caloriesBurned": 350
    },
    {
      "date": "2025-08-10",
      "distance": 7.3,
      "duration": 47,
      "heartRate": {
        "min": 140,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 510
    },
    {
      "date": "2025-08-17",
      "distance": 11.5,
      "duration": 75,
      "heartRate": {
        "min": 132,
        "max": 180,
        "average": 157
      },
      "caloriesBurned": 785
    },
    {
      "date": "2025-08-24",
      "distance": 5.6,
      "duration": 36,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 164
      },
      "caloriesBurned": 395
    },
    {
      "date": "2025-08-31",
      "distance": 6.8,
      "duration": 44,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 163
      },
      "caloriesBurned": 475
    },
    {
      "date": "2025-09-04",
      "distance": 4.5,
      "duration": 29,
      "heartRate": {
        "min": 144,
        "max": 179,
        "average": 167
      },
      "caloriesBurned": 325
    },
    {
      "date": "2025-09-07",
      "distance": 8.8,
      "duration": 57,
      "heartRate": {
        "min": 139,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 615
    },
    {
      "date": "2025-09-14",
      "distance": 6.2,
      "duration": 40,
      "heartRate": {
        "min": 142,
        "max": 177,
        "average": 164
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-09-21",
      "distance": 5,
      "duration": 32,
      "heartRate": {
        "min": 143,
        "max": 178,
        "average": 165
      },
      "caloriesBurned": 365
    },
    {
      "date": "2025-09-28",
      "distance": 7.5,
      "duration": 48,
      "heartRate": {
        "min": 140,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 525
    },
    {
      "date": "2025-10-05",
      "distance": 9.2,
      "duration": 60,
      "heartRate": {
        "min": 138,
        "max": 179,
        "average": 161
      },
      "caloriesBurned": 640
    },
    {
      "date": "2025-10-12",
      "distance": 5.8,
      "duration": 38,
      "heartRate": {
        "min": 142,
        "max": 177,
        "average": 164
      },
      "caloriesBurned": 410
    },
    {
      "date": "2025-10-19",
      "distance": 4.4,
      "duration": 29,
      "heartRate": {
        "min": 144,
        "max": 179,
        "average": 167
      },
      "caloriesBurned": 320
    },
    {
      "date": "2025-10-23",
      "distance": 6.5,
      "duration": 42,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 164
      },
      "caloriesBurned": 455
    },
    {
      "date": "2025-10-26",
      "distance": 5.3,
      "duration": 35,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 165
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-11-02",
      "distance": 7,
      "duration": 45,
      "heartRate": {
        "min": 140,
        "max": 177,
        "average": 163
      },
      "caloriesBurned": 495
    },
    {
      "date": "2025-11-09",
      "distance": 5.5,
      "duration": 36,
      "heartRate": {
        "min": 142,
        "max": 176,
        "average": 164
      },
      "caloriesBurned": 390
    },
    {
      "date": "2025-11-16",
      "distance": 4.2,
      "duration": 28,
      "heartRate": {
        "min": 143,
        "max": 178,
        "average": 166
      },
      "caloriesBurned": 305
    },
    {
      "date": "2025-11-23",
      "distance": 6,
      "duration": 39,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 164
      },
      "caloriesBurned": 425
    },
    {
      "date": "2025-11-30",
      "distance": 5.2,
      "duration": 34,
      "heartRate": {
        "min": 142,
        "max": 177,
        "average": 164
      },
      "caloriesBurned": 370
    },
    {
      "date": "2025-12-07",
      "distance": 4.8,
      "duration": 32,
      "heartRate": {
        "min": 143,
        "max": 176,
        "average": 165
      },
      "caloriesBurned": 345
    },
    {
      "date": "2025-12-14",
      "distance": 4.5,
      "duration": 30,
      "heartRate": {
        "min": 144,
        "max": 178,
        "average": 166
      },
      "caloriesBurned": 330
    },
    {
      "date": "2025-12-21",
      "distance": 3.8,
      "duration": 25,
      "heartRate": {
        "min": 145,
        "max": 180,
        "average": 168
      },
      "caloriesBurned": 285
    },
    {
      "date": "2025-12-28",
      "distance": 5,
      "duration": 33,
      "heartRate": {
        "min": 143,
        "max": 177,
        "average": 165
      },
      "caloriesBurned": 360
    }
  ],
  "user789": [
    {
      "date": "2025-01-02",
      "distance": 5.5,
      "duration": 33,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 158
      },
      "caloriesBurned": 370
    },
    {
      "date": "2025-01-04",
      "distance": 6.2,
      "duration": 37,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 160
      },
      "caloriesBurned": 410
    },
    {
      "date": "2025-01-06",
      "distance": 4.8,
      "duration": 29,
      "heartRate": {
        "min": 138,
        "max": 172,
        "average": 155
      },
      "caloriesBurned": 320
    },
    {
      "date": "2025-01-09",
      "distance": 7,
      "duration": 42,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 162
      },
      "caloriesBurned": 470
    },
    {
      "date": "2025-01-12",
      "distance": 5.9,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 159
      },
      "caloriesBurned": 390
    },
    {
      "date": "2025-01-15",
      "distance": 6.5,
      "duration": 39,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 161
      },
      "caloriesBurned": 430
    },
    {
      "date": "2025-01-18",
      "distance": 5.2,
      "duration": 31,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 350
    },
    {
      "date": "2025-01-21",
      "distance": 7.3,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 480
    },
    {
      "date": "2025-01-24",
      "distance": 6,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 400
    },
    {
      "date": "2025-01-27",
      "distance": 5.7,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-01-30",
      "distance": 6.8,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-02-02",
      "distance": 5.4,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 345
    },
    {
      "date": "2025-02-05",
      "distance": 7.1,
      "duration": 43,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 465
    },
    {
      "date": "2025-02-08",
      "distance": 6.3,
      "duration": 38,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 415
    },
    {
      "date": "2025-02-11",
      "distance": 5.6,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 375
    },
    {
      "date": "2025-02-14",
      "distance": 6.9,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-02-17",
      "distance": 5.3,
      "duration": 31,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 156
      },
      "caloriesBurned": 340
    },
    {
      "date": "2025-02-20",
      "distance": 7.2,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 480
    },
    {
      "date": "2025-02-23",
      "distance": 6.1,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 395
    },
    {
      "date": "2025-02-26",
      "distance": 5.8,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-03-01",
      "distance": 6.7,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-03-04",
      "distance": 5.5,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 350
    },
    {
      "date": "2025-03-07",
      "distance": 7,
      "duration": 42,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 470
    },
    {
      "date": "2025-03-10",
      "distance": 6.2,
      "duration": 37,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 410
    },
    {
      "date": "2025-03-13",
      "distance": 5.9,
      "duration": 35,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 390
    },
    {
      "date": "2025-03-16",
      "distance": 6.8,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-03-19",
      "distance": 5.6,
      "duration": 33,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 355
    },
    {
      "date": "2025-03-22",
      "distance": 7.3,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 485
    },
    {
      "date": "2025-03-25",
      "distance": 6,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 400
    },
    {
      "date": "2025-03-28",
      "distance": 5.7,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-03-31",
      "distance": 6.9,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-04-03",
      "distance": 5.4,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 345
    },
    {
      "date": "2025-04-06",
      "distance": 7.1,
      "duration": 43,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 465
    },
    {
      "date": "2025-04-09",
      "distance": 6.3,
      "duration": 38,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 415
    },
    {
      "date": "2025-04-12",
      "distance": 5.6,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 375
    },
    {
      "date": "2025-04-15",
      "distance": 6.8,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-04-18",
      "distance": 5.3,
      "duration": 31,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 156
      },
      "caloriesBurned": 340
    },
    {
      "date": "2025-04-21",
      "distance": 7.2,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 480
    },
    {
      "date": "2025-04-24",
      "distance": 6.1,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 395
    },
    {
      "date": "2025-04-27",
      "distance": 5.8,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-04-30",
      "distance": 6.7,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-05-03",
      "distance": 5.5,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 350
    },
    {
      "date": "2025-05-06",
      "distance": 7,
      "duration": 42,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 470
    },
    {
      "date": "2025-05-09",
      "distance": 6.2,
      "duration": 37,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 410
    },
    {
      "date": "2025-05-12",
      "distance": 5.9,
      "duration": 35,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 390
    },
    {
      "date": "2025-05-15",
      "distance": 6.8,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-05-18",
      "distance": 5.6,
      "duration": 33,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 355
    },
    {
      "date": "2025-05-21",
      "distance": 7.3,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 485
    },
    {
      "date": "2025-05-24",
      "distance": 6,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 400
    },
    {
      "date": "2025-05-27",
      "distance": 5.7,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-05-30",
      "distance": 6.9,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-06-02",
      "distance": 5.4,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 345
    },
    {
      "date": "2025-06-05",
      "distance": 7.1,
      "duration": 43,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 465
    },
    {
      "date": "2025-06-08",
      "distance": 6.3,
      "duration": 38,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 415
    },
    {
      "date": "2025-06-11",
      "distance": 5.6,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 375
    },
    {
      "date": "2025-06-14",
      "distance": 6.8,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-06-17",
      "distance": 5.3,
      "duration": 31,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 156
      },
      "caloriesBurned": 340
    },
    {
      "date": "2025-06-20",
      "distance": 7.2,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 480
    },
    {
      "date": "2025-06-23",
      "distance": 6.1,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 395
    },
    {
      "date": "2025-06-26",
      "distance": 5.8,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-06-29",
      "distance": 6.7,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-07-02",
      "distance": 5.5,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 350
    },
    {
      "date": "2025-07-05",
      "distance": 7,
      "duration": 42,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 470
    },
    {
      "date": "2025-07-08",
      "distance": 6.2,
      "duration": 37,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 410
    },
    {
      "date": "2025-07-11",
      "distance": 5.9,
      "duration": 35,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 390
    },
    {
      "date": "2025-07-14",
      "distance": 6.8,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-07-17",
      "distance": 5.6,
      "duration": 33,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 355
    },
    {
      "date": "2025-07-20",
      "distance": 7.3,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 485
    },
    {
      "date": "2025-07-23",
      "distance": 6,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 400
    },
    {
      "date": "2025-07-26",
      "distance": 5.7,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-07-29",
      "distance": 6.9,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-08-01",
      "distance": 5.4,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 345
    },
    {
      "date": "2025-08-04",
      "distance": 7.1,
      "duration": 43,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 465
    },
    {
      "date": "2025-08-07",
      "distance": 6.3,
      "duration": 38,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 415
    },
    {
      "date": "2025-08-10",
      "distance": 5.6,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 375
    },
    {
      "date": "2025-08-13",
      "distance": 6.8,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-08-16",
      "distance": 5.3,
      "duration": 31,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 156
      },
      "caloriesBurned": 340
    },
    {
      "date": "2025-08-19",
      "distance": 7.2,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 480
    },
    {
      "date": "2025-08-22",
      "distance": 6.1,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 395
    },
    {
      "date": "2025-08-25",
      "distance": 5.8,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-08-28",
      "distance": 6.7,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-08-31",
      "distance": 5.5,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 350
    },
    {
      "date": "2025-09-03",
      "distance": 7,
      "duration": 42,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 470
    },
    {
      "date": "2025-09-06",
      "distance": 6.2,
      "duration": 37,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 410
    },
    {
      "date": "2025-09-09",
      "distance": 5.9,
      "duration": 35,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 390
    },
    {
      "date": "2025-09-12",
      "distance": 6.8,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-09-15",
      "distance": 5.6,
      "duration": 33,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 355
    },
    {
      "date": "2025-09-18",
      "distance": 7.3,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 485
    },
    {
      "date": "2025-09-21",
      "distance": 6,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 400
    },
    {
      "date": "2025-09-24",
      "distance": 5.7,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-09-27",
      "distance": 6.9,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-09-30",
      "distance": 5.4,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 345
    },
    {
      "date": "2025-10-03",
      "distance": 7.1,
      "duration": 43,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 465
    },
    {
      "date": "2025-10-06",
      "distance": 6.3,
      "duration": 38,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 415
    },
    {
      "date": "2025-10-09",
      "distance": 5.6,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 375
    },
    {
      "date": "2025-10-12",
      "distance": 6.8,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-10-15",
      "distance": 5.3,
      "duration": 31,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 156
      },
      "caloriesBurned": 340
    },
    {
      "date": "2025-10-18",
      "distance": 7.2,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 480
    },
    {
      "date": "2025-10-21",
      "distance": 6.1,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 395
    },
    {
      "date": "2025-10-24",
      "distance": 5.8,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-10-27",
      "distance": 6.7,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-10-30",
      "distance": 5.5,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 350
    },
    {
      "date": "2025-11-02",
      "distance": 7,
      "duration": 42,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 470
    },
    {
      "date": "2025-11-05",
      "distance": 6.2,
      "duration": 37,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 410
    },
    {
      "date": "2025-11-08",
      "distance": 5.9,
      "duration": 35,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 390
    },
    {
      "date": "2025-11-11",
      "distance": 6.8,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-11-14",
      "distance": 5.6,
      "duration": 33,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 355
    },
    {
      "date": "2025-11-17",
      "distance": 7.3,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 485
    },
    {
      "date": "2025-11-20",
      "distance": 6,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 400
    },
    {
      "date": "2025-11-23",
      "distance": 5.7,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-11-26",
      "distance": 6.9,
      "duration": 41,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-11-29",
      "distance": 5.4,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 345
    },
    {
      "date": "2025-12-02",
      "distance": 7.1,
      "duration": 43,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 465
    },
    {
      "date": "2025-12-05",
      "distance": 6.3,
      "duration": 38,
      "heartRate": {
        "min": 140,
        "max": 176,
        "average": 160
      },
      "caloriesBurned": 415
    },
    {
      "date": "2025-12-08",
      "distance": 5.6,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 159
      },
      "caloriesBurned": 375
    },
    {
      "date": "2025-12-11",
      "distance": 6.8,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 440
    },
    {
      "date": "2025-12-14",
      "distance": 5.3,
      "duration": 31,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 156
      },
      "caloriesBurned": 340
    },
    {
      "date": "2025-12-17",
      "distance": 7.2,
      "duration": 44,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 480
    },
    {
      "date": "2025-12-20",
      "distance": 6.1,
      "duration": 36,
      "heartRate": {
        "min": 140,
        "max": 175,
        "average": 159
      },
      "caloriesBurned": 395
    },
    {
      "date": "2025-12-23",
      "distance": 5.8,
      "duration": 34,
      "heartRate": {
        "min": 141,
        "max": 177,
        "average": 160
      },
      "caloriesBurned": 380
    },
    {
      "date": "2025-12-26",
      "distance": 6.7,
      "duration": 40,
      "heartRate": {
        "min": 143,
        "max": 179,
        "average": 162
      },
      "caloriesBurned": 435
    },
    {
      "date": "2025-12-29",
      "distance": 5.5,
      "duration": 32,
      "heartRate": {
        "min": 139,
        "max": 174,
        "average": 157
      },
      "caloriesBurned": 350
    },
    {
      "date": "2026-01-01",
      "distance": 7,
      "duration": 42,
      "heartRate": {
        "min": 142,
        "max": 178,
        "average": 163
      },
      "caloriesBurned": 470
    }
  ],
  "user456": [
    {
      "date": "2025-01-05",
      "distance": 3,
      "duration": 22,
      "heartRate": {
        "min": 120,
        "max": 145,
        "average": 132
      },
      "caloriesBurned": 180
    },
    {
      "date": "2025-01-19",
      "distance": 4.2,
      "duration": 30,
      "heartRate": {
        "min": 122,
        "max": 148,
        "average": 135
      },
      "caloriesBurned": 220
    },
    {
      "date": "2025-02-02",
      "distance": 3.5,
      "duration": 25,
      "heartRate": {
        "min": 121,
        "max": 146,
        "average": 133
      },
      "caloriesBurned": 190
    },
    {
      "date": "2025-02-16",
      "distance": 4,
      "duration": 28,
      "heartRate": {
        "min": 123,
        "max": 147,
        "average": 134
      },
      "caloriesBurned": 210
    },
    {
      "date": "2025-03-02",
      "distance": 3.2,
      "duration": 23,
      "heartRate": {
        "min": 120,
        "max": 144,
        "average": 131
      },
      "caloriesBurned": 175
    },
    {
      "date": "2025-03-16",
      "distance": 4.5,
      "duration": 32,
      "heartRate": {
        "min": 124,
        "max": 149,
        "average": 136
      },
      "caloriesBurned": 230
    },
    {
      "date": "2025-03-30",
      "distance": 3.8,
      "duration": 27,
      "heartRate": {
        "min": 122,
        "max": 146,
        "average": 133
      },
      "caloriesBurned": 195
    },
    {
      "date": "2025-04-13",
      "distance": 4.1,
      "duration": 29,
      "heartRate": {
        "min": 123,
        "max": 147,
        "average": 134
      },
      "caloriesBurned": 210
    },
    {
      "date": "2025-04-27",
      "distance": 3.6,
      "duration": 25,
      "heartRate": {
        "min": 121,
        "max": 145,
        "average": 132
      },
      "caloriesBurned": 185
    },
    {
      "date": "2025-05-11",
      "distance": 4.3,
      "duration": 31,
      "heartRate": {
        "min": 124,
        "max": 148,
        "average": 135
      },
      "caloriesBurned": 220
    },
    {
      "date": "2025-05-25",
      "distance": 3.4,
      "duration": 24,
      "heartRate": {
        "min": 120,
        "max": 144,
        "average": 131
      },
      "caloriesBurned": 180
    },
    {
      "date": "2025-06-08",
      "distance": 4,
      "duration": 28,
      "heartRate": {
        "min": 123,
        "max": 147,
        "average": 134
      },
      "caloriesBurned": 210
    },
    {
      "date": "2025-06-22",
      "distance": 3.7,
      "duration": 26,
      "heartRate": {
        "min": 122,
        "max": 146,
        "average": 133
      },
      "caloriesBurned": 190
    },
    {
      "date": "2025-07-06",
      "distance": 4.2,
      "duration": 30,
      "heartRate": {
        "min": 124,
        "max": 148,
        "average": 135
      },
      "caloriesBurned": 220
    },
    {
      "date": "2025-07-20",
      "distance": 3.5,
      "duration": 25,
      "heartRate": {
        "min": 121,
        "max": 145,
        "average": 132
      },
      "caloriesBurned": 185
    },
    {
      "date": "2025-08-03",
      "distance": 4.1,
      "duration": 29,
      "heartRate": {
        "min": 123,
        "max": 147,
        "average": 134
      },
      "caloriesBurned": 210
    },
    {
      "date": "2025-08-17",
      "distance": 3.8,
      "duration": 27,
      "heartRate": {
        "min": 122,
        "max": 146,
        "average": 133
      },
      "caloriesBurned": 195
    },
    {
      "date": "2025-08-31",
      "distance": 4,
      "duration": 28,
      "heartRate": {
        "min": 123,
        "max": 147,
        "average": 134
      },
      "caloriesBurned": 210
    },
    {
      "date": "2025-09-14",
      "distance": 3.6,
      "duration": 25,
      "heartRate": {
        "min": 121,
        "max": 145,
        "average": 132
      },
      "caloriesBurned": 185
    },
    {
      "date": "2025-09-28",
      "distance": 4.3,
      "duration": 31,
      "heartRate": {
        "min": 124,
        "max": 148,
        "average": 135
      },
      "caloriesBurned": 220
    },
    {
      "date": "2025-10-12",
      "distance": 3.4,
      "duration": 24,
      "heartRate": {
        "min": 120,
        "max": 144,
        "average": 131
      },
      "caloriesBurned": 180
    },
    {
      "date": "2025-10-26",
      "distance": 4.1,
      "duration": 29,
      "heartRate": {
        "min": 123,
        "max": 147,
        "average": 134
      },
      "caloriesBurned": 210
    },
    {
      "date": "2025-11-09",
      "distance": 3.7,
      "duration": 26,
      "heartRate": {
        "min": 122,
        "max": 146,
        "average": 133
      },
      "caloriesBurned": 190
    },
    {
      "date": "2025-11-23",
      "distance": 4,
      "duration": 28,
      "heartRate": {
        "min": 123,
        "max": 147,
        "average": 134
      },
      "caloriesBurned": 210
    },
    {
      "date": "2025-12-07",
      "distance": 3.5,
      "duration": 25,
      "heartRate": {
        "min": 121,
        "max": 145,
        "average": 132
      },
      "caloriesBurned": 185
    },
    {
      "date": "2025-12-21",
      "distance": 4.2,
      "duration": 30,
      "heartRate": {
        "min": 124,
        "max": 148,
        "average": 135
      },
      "caloriesBurned": 220
    }
  ]
};
