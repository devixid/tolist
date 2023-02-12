import {
  SortAToZIcon,
  SortLatestIcon,
  SortOldestIcon,
  SortUnfinished,
  SortZToAIcon,
} from "@/assets";

export const priorities = [
  {
    id: "very-high",
    label: "Very High",
    color: "#ED4C5C",
  },
  {
    id: "high",
    label: "High",
    color: "#F8A541",
  },
  {
    id: "normal",
    label: "Normal",
    color: "#00A790",
  },
  {
    id: "low",
    label: "Low",
    color: "#428BC1",
  },
  {
    id: "very-low",
    label: "Very Low",
    color: "#8942C1",
  },
];

export const sort = [
  {
    id: "latest",
    label: "Terbaru",
    Icon: SortLatestIcon,
  },
  {
    id: "oldest",
    label: "Terlama",
    Icon: SortOldestIcon,
  },
  {
    id: "a-to-z",
    label: "A-Z",
    Icon: SortAToZIcon,
  },
  {
    id: "z-to-a",
    label: "Z-A",
    Icon: SortZToAIcon,
  },
  {
    id: "unfinished",
    label: "Belum Selesai",
    Icon: SortUnfinished,
  },
];
