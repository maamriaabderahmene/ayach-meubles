"use client";

import { useI18n } from "@/lib/i18n";
import { useState, useEffect } from "react";

interface BundleVariant {
  size: string;
  color: string;
}

interface BundleVariantSelectorProps {
  bundleQuantity: number;
  availableSizes: string[];
  availableColors: string[];
  onVariantsChange: (variants: BundleVariant[]) => void;
  locale: string;
  t: (key: string) => string;
}

export default function BundleVariantSelector({
  bundleQuantity,
  availableSizes,
  availableColors,
  onVariantsChange,
  locale,
  t
}: BundleVariantSelectorProps) {
  const [variants, setVariants] = useState<BundleVariant[]>([]);

  // Initialize with default variants for each item
  useEffect(() => {
    if (bundleQuantity > 0 && variants.length === 0) {
      if (availableSizes.length > 0 && availableColors.length > 0) {
        const initialVariants: BundleVariant[] = Array(bundleQuantity).fill(null).map(() => ({
          size: availableSizes[0],
          color: availableColors[0]
        }));
        setVariants(initialVariants);
        onVariantsChange(initialVariants);
      } else if (availableSizes.length > 0) {
        // Only sizes available
        const initialVariants: BundleVariant[] = Array(bundleQuantity).fill(null).map(() => ({
          size: availableSizes[0],
          color: ''
        }));
        setVariants(initialVariants);
        onVariantsChange(initialVariants);
      } else if (availableColors.length > 0) {
        // Only colors available
        const initialVariants: BundleVariant[] = Array(bundleQuantity).fill(null).map(() => ({
          size: '',
          color: availableColors[0]
        }));
        setVariants(initialVariants);
        onVariantsChange(initialVariants);
      } else {
        // No variants available
        const initialVariants: BundleVariant[] = Array(bundleQuantity).fill(null).map(() => ({
          size: '',
          color: ''
        }));
        setVariants(initialVariants);
        onVariantsChange(initialVariants);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bundleQuantity]);

  // Update parent when variants change
  const handleVariantsUpdate = (newVariants: BundleVariant[]) => {
    setVariants(newVariants);
    onVariantsChange(newVariants);
  };

  const updateVariant = (index: number, field: 'size' | 'color', value: string) => {
    const newVariants = [...variants];
    newVariants[index] = { ...newVariants[index], [field]: value };
    handleVariantsUpdate(newVariants);
  };

  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
      <div className="mb-4">
        <h4 className="font-semibold text-sm text-gray-900 mb-1">
          {locale === 'ar' ? 'اختر المتغيرات لكل قطعة' : 'Sélectionnez les variantes pour chaque article'}
        </h4>
        <p className="text-xs text-gray-500">
          {locale === 'ar' 
            ? `اختر المقاس واللون لكل قطعة من ${bundleQuantity} قطع`
            : `Sélectionnez la taille et la couleur pour chacun des ${bundleQuantity} articles`
          }
        </p>
      </div>

      <div className="space-y-3">
        {Array(bundleQuantity).fill(null).map((_, index) => {
          const variant = variants[index] || { size: availableSizes[0] || '', color: availableColors[0] || '' };
          
          return (
            <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-gray-600">
                  {locale === 'ar' ? `قطعة ${index + 1}` : `Article ${index + 1}`}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Size */}
                {availableSizes.length > 0 && (
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {locale === 'ar' ? 'المقاس' : 'Taille'}
                    </label>
                    <select
                      value={variant.size}
                      onChange={(e) => updateVariant(index, 'size', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-zak-black focus:border-zak-black outline-none bg-white"
                    >
                      {availableSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Color */}
                {availableColors.length > 0 && (
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {locale === 'ar' ? 'اللون' : 'Couleur'}
                    </label>
                    <select
                      value={variant.color}
                      onChange={(e) => updateVariant(index, 'color', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-zak-black focus:border-zak-black outline-none bg-white"
                    >
                      {availableColors.map((color) => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

