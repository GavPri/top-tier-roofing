"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface ServicesGalleryProps {
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  {
    id: "1",
    src: "/modern-residential-roof-installation.jpg",
    alt: "Modern residential roof",
    category: "Residential",
  },
  {
    id: "2",
    src: "/commercial-building-flat-roof.jpg",
    alt: "Commercial flat roof",
    category: "Commercial",
  },
  {
    id: "3",
    src: "/roof-repair-work-in-progress.jpg",
    alt: "Roof repair",
    category: "Repairs",
  },
  {
    id: "4",
    src: "/luxury-home-with-slate-roof.jpg",
    alt: "Slate roof installation",
    category: "Residential",
  },
  {
    id: "5",
    src: "/industrial-warehouse-metal-roof.jpg",
    alt: "Industrial metal roof",
    category: "Commercial",
  },
  {
    id: "6",
    src: "/emergency-roof-repair-after-storm.jpg",
    alt: "Emergency repair",
    category: "Repairs",
  },
  {
    id: "7",
    src: "/new-roof-installation-on-suburban-home.jpg",
    alt: "New installation",
    category: "Installations",
  },
  {
    id: "8",
    src: "/office-building-roof-maintenance.jpg",
    alt: "Roof maintenance",
    category: "Maintenance",
  },
  {
    id: "9",
    src: "/residential-shingle-roof-replacement.jpg",
    alt: "Shingle replacement",
    category: "Residential",
  },
  {
    id: "10",
    src: "/commercial-roofing-project-downtown.jpg",
    alt: "Downtown commercial project",
    category: "Commercial",
  },
  {
    id: "11",
    src: "/roof-inspection-and-repair.jpg",
    alt: "Inspection and repair",
    category: "Repairs",
  },
  {
    id: "12",
    src: "/complete-roof-installation-modern-home.jpg",
    alt: "Complete installation",
    category: "Installations",
  },
];

export function ServicesGallery({
  images = defaultImages,
}: ServicesGalleryProps) {
  const categories = [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-6 py-2 text-sm font-medium transition-colors rounded-full",
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer"
          >
            <Image
              fill
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/90 text-sm font-medium mb-1">
                  {image.category}
                </p>
                <p className="text-white text-lg font-light">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
