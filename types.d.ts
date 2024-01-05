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
