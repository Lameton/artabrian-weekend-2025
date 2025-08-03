export interface EventInfo {
  name: string;
  startDate: Date;
  endDate: Date;
  location: {
    name: string;
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  organizers: string[];
  sponsors: string[];
  contact: {
    email: string;
    phone: string;
    website: string;
    social: {
      twitter?: string;
      instagram?: string;
      telegram?: string;
    };
  };
}
