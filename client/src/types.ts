
export interface IStop {
  _id: string;
  station: string;
  arrivalTime: string;
  departureTime: string;
}

export interface ITrain {
  _id: string;
  trainName: string;
  departureStation: string;
  departureTime: string;
  arrivalStation: string;
  arrivalTime: string;
  distance: number;
  stops?: IStop[];
}