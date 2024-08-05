import Image from 'next/image';
export default function FooterSection() {
  return (
    <div>
      <h1>Footer</h1>
      <Image
        src='/Tech Help Heroes.png'
        width={200}
        height={200}
        alt='Tech Help Heroes Logo'
      />
    </div>
  );
}
