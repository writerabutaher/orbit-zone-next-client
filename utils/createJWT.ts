export const createJWT = async (payload: { email: string }) => {
  try {
    const response = await fetch(`${process.env.CLIENT_URL}/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const token = await response.json();
    return token;
  } catch (error) {
    console.error(error);
  }
};
