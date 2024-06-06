export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    email  : string;
    gender : string;
    ipAddress : string;
}

export const authors = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        gender: 'Male',
        ipAddress: '192.168.1.1'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        gender: 'Female',
        ipAddress: '192.168.1.2'
    },
    {
        id: 3,
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
        gender: 'Female',
        ipAddress: '192.168.1.3'
    },
    {
        id: 4,
        firstName: 'Bob',
        lastName: 'Brown',
        email: 'bob.brown@example.com',
        gender: 'Male',
        ipAddress: '192.168.1.4'
    },
    {
        id: 5,
        firstName: 'Charlie',
        lastName: 'Davis',
        email: 'charlie.davis@example.com',
        gender: 'Non-binary',
        ipAddress: '192.168.1.5'
    }
];