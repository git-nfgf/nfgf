export interface Step {
    id: number;
    title: string;
    subtitle: string;
    desc: string;
    img: string;
    icon: string;
}

export interface Project {
    id: number;
    name: string;
    type: string;
    location: string;
    removal_annual: string;
    permanence: string;
    status: 'Active' | 'Feasibility';
    img: string;
    description: string;
}