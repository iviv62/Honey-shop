import Image from 'next/image';
import bees from '../../images/bees.jpeg';

const AboutSection = () => {
    return (
        <section class="font-sans bg-white container mx-auto px-5 flex flex-grow">
  <div class="flex flex-col items-center py-8">
    <div class="flex flex-col w-full mb-12 text-left">
      <div class="w-full mx-auto lg:w-1/2">
        <h1 class="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">A few words about us</h1>
        <Image
       
        objectFit="contain"
        src={bees}
        alt="bees" />
        <h2 class="mx-auto mt-4 mb-4 text-xl font-semibold text-black">Are you ready for a new experience and challenge ?</h2>
        <p class="mx-auto text-base font-medium leading-relaxed text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h3 class="mx-auto mt-4 mb-4 text-xl font-semibold text-black">Make challenges</h3>
        <p class="mx-auto text-base font-medium leading-relaxed text-gray-800">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>

    </div>
  </div>
</section>
    )
}

export default AboutSection
