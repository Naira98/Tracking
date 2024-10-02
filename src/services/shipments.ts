export const trackShipment = async (trackingNumber: string) => {
  try {
    const res = await fetch(
      `https://tracking.bosta.co/shipments/track/${trackingNumber}`,
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
