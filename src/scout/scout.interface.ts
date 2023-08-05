
import { scoutRole } from './Dto/enum';

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
  // stipened: number;
  trained: boolean;
}
