export interface Innovation {
  id: string
  slug: string
  title: string
  shortDescription: string
  problem: string
  innovation: string
  scientificFoundation: string[]
  potentialApplications: string[]
  patentNumber?: string
  patentDetails?: {
    title?: string
    jurisdiction?: string
    grantDate?: string
    owner?: string
    link?: string
  }
}

export const INNOVATIONS: Innovation[] = [
  {
    id: '1',
    slug: 'biodegradable-wearable-sweat-glucose-biosensor',
    title: 'Biodegradable Wearable Sweat Glucose Biosensor',
    shortDescription: 'A patented biodegradable and wearable biosensing material developed for non-invasive sweat glucose sensing.',
    problem: 'Non-invasive glucose monitoring requires sensitive, flexible sensors; existing wearable electronics often use non-biodegradable materials contributing to e-waste.',
    innovation: 'A flexible, biodegradable sensing material and electrode assembly designed for sweat-based electrochemical glucose detection with reduced environmental footprint.',
    scientificFoundation: [
      'Flexible biodegradable polymer matrices',
      'Electrochemical sensor design for non-enzymatic glucose detection',
      'Materials integration for wearable adhesion and skin compatibility'
    ],
    potentialApplications: [
      'Wearable health monitoring',
      'Sustainable disposable biosensors',
      'Flexible diagnostic patches for low-resource settings'
    ],
    patentNumber: '415283',
    patentDetails: {
      title: 'FLEXIBLE AND BIODEGRADABLE POLYMER COMPOSITE FOR SENSING SWEAT GLUCOSE',
      grantDate: '25/11/2019',
    }
  },
  {
    id: '2',
    slug: 'biodegradable-sanitary-napkin-technology',
    title: 'Biodegradable Sanitary Napkin Technology',
    shortDescription: 'A patented biodegradable sanitary napkin designed to reduce environmental impact while maintaining user performance.',
    problem: 'Conventional disposable sanitary products generate large volumes of non-biodegradable waste and rely on synthetic plastics.',
    innovation: 'A biodegradable absorbent structure and layered design using natural polymers to enable improved biodegradability while meeting hygiene requirements.',
    scientificFoundation: [
      'Cellulose-based absorbent materials',
      'Biodegradable polymer composites',
      'Material testing for absorbency, mechanical integrity and biodegradation'
    ],
    potentialApplications: [
      'Sustainable personal hygiene products',
      'Compostable sanitary products for low-waste initiatives',
      'Consumer healthcare products with reduced environmental footprint'
    ],
    patentNumber: '355605',
    patentDetails: {
      title: 'BIODEGRADABLE SANITARY NAPKIN FOR PERSONAL AND ENVIRONMENTAL HYGIENE AND METHOD THEREOF',
      grantDate: '	27/11/2018',
    }
  }
]
