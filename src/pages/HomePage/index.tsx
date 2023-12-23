import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import { CategoryCard } from "@components/CategoryCard";
import { ProductCard } from "@components/ProductCard";
import { Section } from "@components/Section";

// import required modules
// Import Swiper styles
import Image1 from "@assets/images/category-img-1.png";
import Image10 from "@assets/images/category-img-10.png";
import Image11 from "@assets/images/category-img-11.png";
import Image12 from "@assets/images/category-img-12.png";
import Image13 from "@assets/images/category-img-13.png";
import Image2 from "@assets/images/category-img-2.png";
import Image3 from "@assets/images/category-img-3.png";
import Image4 from "@assets/images/category-img-4.png";
import Image5 from "@assets/images/category-img-5.png";
import Image6 from "@assets/images/category-img-6.png";
import Image7 from "@assets/images/category-img-7.png";
import Image8 from "@assets/images/category-img-8.png";
import Image9 from "@assets/images/category-img-9.png";
import ProductImage from "@assets/images/product-img.png";
import StoreImg from "@assets/images/StoreImg.png";
import { Slider } from "@components/Slider";
import "swiper/css";
import "swiper/css/navigation";
import { NewsCard } from "@components/NewsCard";
import { StoryCard } from "@components/StoryCard";
import { StoreAddressCard } from "@components/StoreAddressCard";
export const HomePage = () => {
  return (
    <Box bgColor={"#F8FAFF"} py={"20px"} overflow={"hidden"}>
      <Container maxW={"1340px"}>
        <Stack spacing={12}>
          <Slider
            slidesPerView={14}
            disableArrow
            breakpoint={{
              "@0.00": {
                slidesPerView: 3,
              },
              "@0.25": {
                slidesPerView: 3,
              },
              "@0.50": {
                slidesPerView: 7,
              },
              "@0.75": {
                slidesPerView: 10,
              },
              "@1.00": {
                slidesPerView: 14,
              },
            }}
          >
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
            <StoryCard title="Скидки" image={Image1} />
          </Slider>
          <Section title="Категории">
            <SimpleGrid columns={[1, 3, 5, 5, 7]} spacing={2}>
              <CategoryCard count={3000} image={Image1} title="Смесители" />
              <CategoryCard count={3000} image={Image2} title="Смесители" />
              <CategoryCard count={3000} image={Image3} title="Смесители" />
              <CategoryCard count={3000} image={Image4} title="Смесители" />
              <CategoryCard count={3000} image={Image5} title="Смесители" />
              <CategoryCard count={3000} image={Image6} title="Смесители" />
              <CategoryCard count={3000} image={Image7} title="Смесители" />

              <CategoryCard count={3000} image={Image8} title="Смесители" />
              <CategoryCard count={3000} image={Image9} title="Смесители" />
              <CategoryCard count={3000} image={Image10} title="Смесители" />
              <CategoryCard count={3000} image={Image11} title="Смесители" />
              <CategoryCard count={3000} image={Image12} title="Смесители" />
              <CategoryCard count={3000} image={Image13} title="Смесители" />
              <CategoryCard count={3000} image={Image13} title="Смесители" />
            </SimpleGrid>
          </Section>
          <Section title="Хиты продаж">
            <Slider
              slidesPerView={6}
              breakpoint={{
                "@0.00": {
                  slidesPerView: 1,
                },
                "@0.50": {
                  slidesPerView: 2,
                },
                "@0.75": {
                  slidesPerView: 3,
                },
                "@0.95": {
                  slidesPerView: 4,
                },
                "@1.00": {
                  slidesPerView: 6,
                },
              }}
            >
              <ProductCard
                image={ProductImage}
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                inStock
                isSet
                price={1234}
              />
              <ProductCard
                image={ProductImage}
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                inStock
                isSet
                price={1234}
              />
              <ProductCard
                image={ProductImage}
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                inStock
                isSet
                price={1234}
              />
              <ProductCard
                image={ProductImage}
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                inStock
                isSet
                price={1234}
              />
              <ProductCard
                image={ProductImage}
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                inStock
                isSet
                price={1234}
              />
              <ProductCard
                image={ProductImage}
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                inStock
                isSet
                price={1234}
              />
              <ProductCard
                image={ProductImage}
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                inStock
                isSet
                price={1234}
              />
              <ProductCard
                image={ProductImage}
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                inStock
                isSet
                price={1234}
              />
              <ProductCard
                image={ProductImage}
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                inStock
                isSet
                price={1234}
              />
            </Slider>
          </Section>
          <Section title="Новости">
            <Slider
              slidesPerView={3}
              breakpoint={{
                "@0.00": {
                  slidesPerView: 1,
                },
                "@0.50": {
                  slidesPerView: 2,
                },
                "@1.00": {
                  slidesPerView: 3,
                },
              }}
            >
              <NewsCard discount={50} description="На кухонную мебель " />
              <NewsCard discount={50} description="На кухонную мебель " />
              <NewsCard discount={50} description="На кухонную мебель " />
              <NewsCard discount={50} description="На кухонную мебель " />
              <NewsCard discount={50} description="На кухонную мебель " />
            </Slider>
          </Section>
          <Section title="Аукционные товары">
            <Slider
              slidesPerView={6}
              breakpoint={{
                "@0.00": {
                  slidesPerView: 1,
                },
                "@0.50": {
                  slidesPerView: 2,
                },
                "@0.75": {
                  slidesPerView: 3,
                },
                "@0.95": {
                  slidesPerView: 4,
                },
                "@1.00": {
                  slidesPerView: 6,
                },
              }}
            >
              <ProductCard
                image={ProductImage}
                inStock
                isSet
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                price={1256}
                newPrice={999999}
                oldPrice={1256}
              />
              <ProductCard
                image={ProductImage}
                inStock
                isSet
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                price={1256}
                newPrice={999999}
                oldPrice={1256}
              />
              <ProductCard
                image={ProductImage}
                inStock
                isSet
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                price={1256}
                newPrice={999999}
                oldPrice={1256}
              />
              <ProductCard
                image={ProductImage}
                inStock
                isSet
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                price={1256}
                newPrice={999999}
                oldPrice={1256}
              />
              <ProductCard
                image={ProductImage}
                inStock
                isSet
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                price={1256}
                newPrice={999999}
                oldPrice={1256}
              />
              <ProductCard
                image={ProductImage}
                inStock
                isSet
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                price={1256}
                newPrice={999999}
                oldPrice={1256}
              />
              <ProductCard
                image={ProductImage}
                inStock
                isSet
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                price={1256}
                newPrice={999999}
                oldPrice={1256}
              />
              <ProductCard
                image={ProductImage}
                inStock
                isSet
                name="Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605.."
                price={1256}
                newPrice={999999}
                oldPrice={1256}
              />
            </Slider>
          </Section>
          <Section title="Адреса магазинов">
            <SimpleGrid columns={[1, 2, 3]} spacing={"10px"}>
              <StoreAddressCard
                address="Кыргызстан, г. Бишкек ул. Турусбекова A167"
                avatar={StoreImg}
                date={{
                  checkIn: "8:00",
                  checkOut: "12:00",
                }}
                name="Iskender home"
                phoneNumber="+996 500 345 345"
              />
              <StoreAddressCard
                address="Кыргызстан, г. Бишкек ул. Турусбекова A167"
                avatar={StoreImg}
                date={{
                  checkIn: "8:00",
                  checkOut: "12:00",
                }}
                name="Iskender home"
                phoneNumber="+996 500 345 345"
              />
              <StoreAddressCard
                address="Кыргызстан, г. Бишкек ул. Турусбекова A167"
                avatar={StoreImg}
                date={{
                  checkIn: "8:00",
                  checkOut: "12:00",
                }}
                name="Iskender home"
                phoneNumber="+996 500 345 345"
              />
              <StoreAddressCard
                address="Кыргызстан, г. Бишкек ул. Турусбекова A167"
                avatar={StoreImg}
                date={{
                  checkIn: "8:00",
                  checkOut: "12:00",
                }}
                name="Iskender home"
                phoneNumber="+996 500 345 345"
              />
              <StoreAddressCard
                address="Кыргызстан, г. Бишкек ул. Турусбекова A167"
                avatar={StoreImg}
                date={{
                  checkIn: "8:00",
                  checkOut: "12:00",
                }}
                name="Iskender home"
                phoneNumber="+996 500 345 345"
              />
              <StoreAddressCard
                address="Кыргызстан, г. Бишкек ул. Турусбекова A167"
                avatar={StoreImg}
                date={{
                  checkIn: "8:00",
                  checkOut: "12:00",
                }}
                name="Iskender home"
                phoneNumber="+996 500 345 345"
              />
              <StoreAddressCard
                address="Кыргызстан, г. Бишкек ул. Турусбекова A167"
                avatar={StoreImg}
                date={{
                  checkIn: "8:00",
                  checkOut: "12:00",
                }}
                name="Iskender home"
                phoneNumber="+996 500 345 345"
              />
              <StoreAddressCard
                address="Кыргызстан, г. Бишкек ул. Турусбекова A167"
                avatar={StoreImg}
                date={{
                  checkIn: "8:00",
                  checkOut: "12:00",
                }}
                name="Iskender home"
                phoneNumber="+996 500 345 345"
              />
            </SimpleGrid>
          </Section>
        </Stack>
      </Container>
    </Box>
  );
};
