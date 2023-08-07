import { scoutRole } from '../Dto/enum'; // please create sepreate folder for interface  and move there

export interface Scout {
  name: string;
  age: number;
  email: string;
  location: string;
  phoneNo: number;
  dateOfBirth: Date;
  dateOfJoin: Date;
  qualification: string[];
  role: scoutRole;
  trained: boolean;
}
