import { experimental_FigmaImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Figma to OG Image';

export const contentType = 'image/png';
export const revalidate = 3600;

export default async function Image() {
  const geistSemiBold = await fetch(new URL('./Geist-SemiBold.otf', import.meta.url)).then((res) => res.arrayBuffer());
  //www.figma.com/design/hPCU9QkipbHm6h1kyMIH3W/FigmaImageResponse-Demo-(Copy)?node-id=1-60&m=dev
  https: return experimental_FigmaImageResponse({
    // url: "https://www.figma.com/file/lbTOxOq2wdE4ZK5vH4ADvb/Changelog-Images?type=design&node-id=3470-8964&mode=design&t=8r7sUnhzATSbyOhL-4",
    url: 'https://www.figma.com/file/hPCU9QkipbHm6h1kyMIH3W/FigmaImageResponse-Demo-(Copy)?type=design&node-id=1206-2&t=QLpnzMpEb0VROMl6-0',
    template: {
      Title: 'A dynamic OG Image',
      Description: {
        value: 'Created using a few lines of code',
        props: { centerHorizontally: true },
      },
    },
    fonts: [
      {
        name: 'Geist',
        data: geistSemiBold,
        style: 'normal',
        weight: 600,
      },
    ],
  });
}
