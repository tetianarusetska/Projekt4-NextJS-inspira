import FooterContent from './FooterContent';

export default function Footer() {
  return (
    <div 
      className='hidden lg:block lg:h-200 lg:relative'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='hidden lg:block lg:fixed lg:bottom-0 lg:h-200 lg:w-full'>
        <FooterContent />
      </div>
    </div>
  )
}