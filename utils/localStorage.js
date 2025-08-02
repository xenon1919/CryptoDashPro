export const getWatchlist = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("watchlist") || "[]");
};

export const toggleWatchlist = (id) => {
  const list = getWatchlist();
  const updated = list.includes(id)
    ? list.filter((i) => i !== id)
    : [...list, id];
  localStorage.setItem("watchlist", JSON.stringify(updated));
  return updated;
};
