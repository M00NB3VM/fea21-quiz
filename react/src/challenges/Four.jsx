import React, { useState, useEffect } from "react";

// Den här komponenten har ett par stycken problem och
// saknar några delar. Mer exakt: 5 stycken.
// Det är din uppgift att identifiera och lösa dessa.
//
// Men komponentens syfte är att hämta en användare
// från dummyjson-apiet och skriva ut dennes namn.

const Four = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  async function getUser() {
    const user = await getData("https://dummyjson.com/users/1");
    setUser(user);
  }

  useEffect(() => {
    Promise.all([getUser()]).then(() => {
      setLoading(false);
    });
  }, []);

  // Fungerar lokalt i webbläsaren men testet failar, får ej ihop det.

  if (loading) {
    return <div data-testid="four-loading">Loading...</div>;
  }

  // Rör inte koden under denna kommentaren
  if (!user) {
    return <div data-testid="four-name">No user found</div>;
  }

  return <div data-testid="four-name">My name is: {user.firstName}</div>;
};

export default Four;
