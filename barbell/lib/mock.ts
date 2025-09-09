export type FeedItem = {
id: string;
user: { name: string; initial: string };
timeAgo: string;
image: string; // remote image url
title: string; // e.g., Squat
subtitle: string; // e.g., 135kg x 5 reps
chips: string[]; // e.g., [RPE 7, Est. 1RM 150kg, BW 85kg]
likes: number;
comments: number;
shares: number;
};


export const mockFeed: FeedItem[] = [
{
id: '1',
user: { name: 'LiftingLarry', initial: 'L' },
timeAgo: '1d ago',
image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop',
title: 'Squat',
subtitle: '135kg x 5 reps',
chips: ['RPE 7', 'Est. 1RM 150kg', 'BW 85kg'],
likes: 12,
comments: 3,
shares: 2,
},
{
id: '2',
user: { name: 'GymGina', initial: 'G' },
timeAgo: '2d ago',
image: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1600&auto=format&fit=crop',
title: 'Deadlift',
subtitle: '180kg x 3 reps',
chips: ['RPE 8', 'Est. 1RM 191kg', 'BW 70kg'],
likes: 9,
comments: 1,
shares: 0,
},
];