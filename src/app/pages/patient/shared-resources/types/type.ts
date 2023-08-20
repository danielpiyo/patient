export interface Mclservices {
  id: number;
  name: string;
  tag: string;
  detailed_name: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at?: any;
  updated_by?: any;
  deleted_yn: string;
  deleted_by?: any;
  clinician_count: number;
  nurse_count: number;
}

export interface Nurse {
  id: number;
  name: string;
  username: string;
  email: string;
  sex: string;
  Verified_status: number;
  mobile: string;
  address: string;
  qualification: string;
  speciality: string;
  dr_type: string;
  about: string;
  slot_type: number;
  serial_or_slot: string;
  start_time: string;
  end_time: string;
  serial_day: number;
  max_serial: number;
  duration: number;
  fees: number;
  department_id: number;
  location_id: number;
  featured: number;
  status: number;
}

export interface Clinician {
  id: number;
  name: string;
  username: string;
  email: string;
  sex: string;
  Verified_status: number;
  mobile: string;
  address: string;
  qualification: string;
  speciality: string;
  dr_type: string;
  about: string;
  slot_type: number;
  serial_or_slot: string;
  start_time: string;
  end_time: string;
  serial_day: number;
  max_serial: number;
  duration: number;
  fees: number;
  department_id: number;
  location_id: number;
  featured: number;
  status: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  reg_code: string;
  password: string;
  mobile: string;
  address: string;
  location_id: number;
  status: number;
}

export interface UserToken {
  token: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    email: string;
    name: string;
    mobile: string;
    address: string;
    location_id: number;
    status: number;
  };
}

export interface SignupPayload {
  email: string;
}

export interface OnboardPayload {
  name: string;
  email: string;
  password: string;
  mobile: string;
  address: string;
  location_id: number;
}

export interface Locations {
  id: number;
  name: string;
}
