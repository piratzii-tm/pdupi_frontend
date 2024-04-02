import Cookies from "js-cookie";

export const fetchUserData = async () => {
  try {
    const token = await Cookies.get("token");
    const response = await fetch("http://localhost:8000/client", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
