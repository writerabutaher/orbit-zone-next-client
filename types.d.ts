type ChildrenProps = {
  children: React.ReactNode;
};

type UserType = {
  name: string;
  email: string;
};

type UserFormType = {
  password: string;
} & UserType;

type CategoryType = {
  _id: string;
  name: string;
};

type VehicleType = {
  seller_info: {
    name: string;
    email: string;
    number: string;
    address: string;
  };
  company: string;
  model: string;
  year: number;
  description: string;
  price: number;
  category_id: string;
  image: string;
  condition: string;
  advertise: boolean;
};

type VehicleFormType = Omit<VehicleType, "image">;
