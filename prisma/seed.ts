// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      {
        sku: 'IPHONE12-64GB-BLUE',
        slug: 'iphone-12-64gb-blue',
        name: 'iPhone 12',
        description: 'Used iPhone 12, 64GB, Blue',
        price: 11000000,
        imageUrl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-53912377/apple_iphone_13_full67_sbu89ddf.jpeg',
        stockQuantity: 10,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'SAMSUNG-S21-128GB-GRAY',
        slug: 'samsung-galaxy-s21-128gb-phantom-gray',
        name: 'Samsung Galaxy S21',
        description: 'Second hand Samsung Galaxy S21, 128GB, Phantom Gray',
        price: 8700000,
        imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/id/galaxy-s21/gallery/id-galaxy-s21-5g-g991-371107-371107-sm-g991bzadxid-368789808?$720_576_JPG$',
        stockQuantity: 15,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'XIAOMI-MI11-256GB',
        slug: 'xiaomi-mi-11-256gb',
        name: 'Xiaomi Mi 11',
        description: 'Pre-owned Xiaomi Mi 11, 256GB',
        price: 5600000,
        imageUrl: 'https://www.neostore.com.np/assets/uploads/redmi_14c_3.jpg',
        stockQuantity: 8,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'ONEPLUS-9PRO-256GB',
        slug: 'oneplus-9-pro-256gb',
        name: 'OnePlus 9 Pro',
        description: 'Used OnePlus 9 Pro, 256GB, Morning Mist',
        price: 7500000,
        imageUrl: 'https://img.global.news.samsung.com/id/wp-content/uploads/2024/11/28115936/Tampilan-Galaxy-A16-Gray-1000x667.jpg',
        stockQuantity: 7,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'GOOGLE-PIXEL6-128GB',
        slug: 'google-pixel-6-128gb',
        name: 'Google Pixel 6',
        description: 'Second hand Google Pixel 6, 128GB, Stormy Black',
        price: 21000000,
        imageUrl: 'https://shop.urbanrepublic.com.my/cdn/shop/files/Google-Pixel-9-Pro-XL-RoseQuartz-1_0158a38d-cbc2-4613-ad82-fa0be77f8b32.png?v=1744959709',
        stockQuantity: 12,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'IPHONE13-128GB-GREEN',
        slug: 'iphone-13-128gb-green',
        name: 'iPhone 13',
        description: 'Used iPhone 13, 128GB, Alpine Green',
        price: 13000000,
        imageUrl: 'https://www.digimap.co.id/cdn/shop/files/iPhone_13_Pink_PDP_Image_Position-1B__GBEN_36b9f8fe-c3f1-4944-b51f-a11eb53e11ac.jpg?v=1717739632&width=823',
        stockQuantity: 6,
        minimumOrderQuantity: 1,
      },
      {
        sku: 'SAMSUNG-FLIP3-256GB',
        slug: 'samsung-galaxy-z-flip3-256gb',
        name: 'Samsung Galaxy Z Flip3',
        description: 'Pre-owned Samsung Galaxy Z Flip3, 256GB, Cream',
        price: 11000000,
        imageUrl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/95/MTA-176162522/samsung_samsung_galaxy_z_flip_6_12-256gb_garansi_resmi_sein_full03_fl9db0ci.jpg',
        stockQuantity: 4,
        minimumOrderQuantity: 1,
      }
    ],
  });

  console.log('Dummy data inserted');
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
