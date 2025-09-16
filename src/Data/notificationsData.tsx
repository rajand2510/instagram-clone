// notificationsData.tsx  👈 notice .tsx if you keep JSX inside
export const notificationsData = [
  {
    section: 'Today',
    items: [
      {
        type: 'like',
        users: ['https://i.pravatar.cc/64?img=1'], // one user
        text: (
          <>
            <span className="font-semibold">ruchit_pitaliya</span> liked your photo{' '}
            <span className="text-gray-400">16h</span>
          </>
        ),
      },
      {
        type: 'like',
        users: [
          'https://i.pravatar.cc/64?img=2',
          'https://i.pravatar.cc/64?img=3',
        ], // two users for diagonal stack
        text: (
          <>
            <span className="font-semibold">ruchit_pitaliya</span> and{' '}
            <span className="font-semibold">john_doe</span> liked your photo{' '}
            <span className="text-gray-400">3h</span>
          </>
        ),
      },
      {
        type: 'follow',
        users: ['https://i.pravatar.cc/64?img=4'],
        text: (
          <>
            <span className="font-semibold">ruchit_pitaliya</span> started following you{' '}
            <span className="text-gray-400">16h</span>
          </>
        ),
      },
    ],
  },
  {
    section: 'This week',
    items: [
      {
        type: 'like',
        users: [
          'https://i.pravatar.cc/64?img=5',
          'https://i.pravatar.cc/64?img=6',
        ],
        text: (
          <>
            <span className="font-semibold">ruchit_pitaliya</span> and{' '}
            <span className="font-semibold">john_doe</span> liked your photo{' '}
            <span className="text-gray-400">4 Sep</span>
          </>
        ),
      },
      {
        type: 'follow',
        users: ['https://i.pravatar.cc/64?img=7'],
        text: (
          <>
            <span className="font-semibold">ruchit_pitaliya</span> started following you{' '}
            <span className="text-gray-400">3 Sep</span>
          </>
        ),
      },
    ],
  },
  {
    section: 'Earlier',
    items: [
      {
        type: 'like',
        users: [
          'https://i.pravatar.cc/64?img=8',
          'https://i.pravatar.cc/64?img=9',
        ],
        text: (
          <>
            <span className="font-semibold">ruchit_pitaliya</span> and{' '}
            <span className="font-semibold">john_doe</span> liked your photo{' '}
            <span className="text-gray-400">4 Sep</span>
          </>
        ),
      },
      {
        type: 'follow',
        users: ['https://i.pravatar.cc/64?img=10'],
        text: (
          <>
            <span className="font-semibold">ruchit_pitaliya</span> started following you{' '}
            <span className="text-gray-400">3 Sep</span>
          </>
        ),
      },
    ],
  },
    {
    section: 'Earlier',
    items: [
      {
        type: 'like',
        users: [
          'https://i.pravatar.cc/64?img=8',
          'https://i.pravatar.cc/64?img=9',
        ],
        text: (
          <>
            <span className="font-semibold">ruchit_pitaliya</span> and{' '}
            <span className="font-semibold">john_doe</span> liked your photo{' '}
            <span className="text-gray-400">4 Sep</span>
          </>
        ),
      },
      {
        type: 'follow',
        users: ['https://i.pravatar.cc/64?img=10'],
        text: (
          <>
            <span className="font-semibold">ruchit_pitaliya</span> started following you{' '}
            <span className="text-gray-400">3 Sep</span>
          </>
        ),
      },
    ],
  },
];
