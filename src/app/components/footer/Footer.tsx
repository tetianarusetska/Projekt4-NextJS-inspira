import FooterContent from './FooterContent';

export default function Footer() {
  return (
    <div 
      className='relative h-180 lg:h-200'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-200 w-full'>
        <FooterContent />
      </div>
    </div>
  )
}