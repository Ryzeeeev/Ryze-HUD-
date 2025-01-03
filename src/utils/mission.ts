export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "easy": return "text-green-400 bg-green-500/20";
    case "medium": return "text-yellow-400 bg-yellow-500/20";
    case "hard": return "text-red-400 bg-red-500/20";
    default: return "text-gray-400 bg-gray-500/20";
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "available": return "text-blue-400 bg-blue-500/20";
    case "active": return "text-purple-400 bg-purple-500/20";
    case "completed": return "text-green-400 bg-green-500/20";
    default: return "text-gray-400 bg-gray-500/20";
  }
};