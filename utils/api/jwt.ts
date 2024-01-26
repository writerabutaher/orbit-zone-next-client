export const createJWT = async (payload: { email: string }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const removeJWT = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/auth/logout`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
