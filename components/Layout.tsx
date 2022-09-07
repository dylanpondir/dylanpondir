const PONDIR_LINK = {
  href: 'https://www.pondir.com',
  label: 'Pondir',
  description: 'The ultimate toolkit for advertisers',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='mx-auto lg:max-w-6xl px-8'>
        <article className='prose lg:prose-xl'>{children}</article>
      </main>
      <footer className='flex justify-center items-center w-full h-24 border-t'>
        {`© ${new Date().getFullYear()} Dylan Pondir`}
      </footer>
    </>
  );
}
