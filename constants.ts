import { Step, Project } from './types';

// Helper function to get image URLs
const getImageUrl = (path: string) => {
  return new URL(`./assets/compressed/${path}`, import.meta.url).href;
};

// Based on text/csv
export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Bamboo Biochar",
        type: "Tech-Enabled CDR",
        location: "Sindhudurg, India",
        removal_annual: "12,000 t/yr",
        permanence: "100y+",
        status: "Active",
        img: getImageUrl("bamboo biochar 2-min.png"),
        description: "High-permanence biochar production from agricultural residues."
    },
    {
        id: 2,
        name: "Nagapattinam Mangroves",
        type: "Blue Carbon",
        location: "Nagapattinam, India",
        removal_annual: "500ha",
        permanence: "100y+",
        status: "Active",
        img: getImageUrl("mangrove-min.png"),
        description: "Community-led mangrove restoration and protection."
    },
    {
        id: 3,
        name: "Himalayan Native",
        type: "ARR (Reforestation)",
        location: "Golaghat, India",
        removal_annual: "2400 ha",
        permanence: "50y+",
        status: "Active",
        img: getImageUrl("nagaland reforestation-min.png"),
        description: "Native species reforestation on degraded pasture land."
    },
    {
        id: 4,
        name: "Project Pipeline",
        type: "Mixed",
        location: "Global",
        removal_annual: "N/A",
        permanence: "N/A",
        status: "Feasibility",
        img: getImageUrl("pipeline-min.png"),
        description: "We have 5+ projects currently in feasibility or structuring phases across 4 states."
    }
];

// Based on js/app.js
export const STEPS: Step[] = [
    {
        id: 1,
        title: "Identify",
        subtitle: "Satellite-Driven Scouting",
        desc: "We use geospatial data and spectral analysis to identify high-potential sites for restoration and biochar deployment, ensuring maximum ecological uplift.",
        img: getImageUrl("identify-min.png"),
        icon: "travel_explore"
    },
    {
        id: 2,
        title: "Structure",
        subtitle: "Rigorous Due Diligence",
        desc: "Our legal and financial teams structure projects to ensure land tenure security, community buy-in and long-term financial viability before a single dollar is deployed.",
        img: getImageUrl("structure 2-min.jpg"),
        icon: "hub"
    },
    {
        id: 3,
        title: "Deploy",
        subtitle: "Boots on the Ground",
        desc: "We manage the implementation phase directly or through trusted local partners, overseeing planting, facility construction and initial operations.",
        img: getImageUrl("deploy-min.png"),
        icon: "construction"
    },
    {
        id: 4,
        title: "Verify",
        subtitle: "MRV Integration",
        desc: "Continuous Monitoring, Reporting and Verification (MRV) using IoT sensors and remote sensing to prove carbon removal occurred and persists.",
        img: getImageUrl("verify.png"),
        icon: "verified_user"
    },
    {
        id: 5,
        title: "Steward",
        subtitle: "Long-Term Care",
        desc: "We commit to decades of stewardship, ensuring projects mature and communities thrive alongside the restored ecosystems.",
        img: getImageUrl("steward-min.png"),
        icon: "volunteer_activism"
    }
];