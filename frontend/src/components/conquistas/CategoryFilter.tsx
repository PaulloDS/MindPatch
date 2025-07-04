import { motion } from "framer-motion";
import { Badge } from "lucide-react";
import { Button } from "../ui/button";

export function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: any[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-wrap gap-3 justify-center"
    >
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => setSelectedCategory(category.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
            selectedCategory === category.id
              ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
              : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
          }`}
        >
          <category.icon className="w-4 h-4" />
          {category.name}
          <Badge
            className={`ml-1 ${
              selectedCategory === category.id
                ? "bg-white/20 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {category.count}
          </Badge>
        </Button>
      ))}
    </motion.div>
  );
}
