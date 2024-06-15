import { useState } from 'react';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <button className='fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 rounded-full w-16 h-16 bg-[#5a4ef6] hover:bg-[#6c5cf4] m-0 cursor-pointer border border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900' type='button' aria-haspopup='dialog' aria-expanded={isChatOpen} onClick={toggleChat}>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='40' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='text-white block border-gray-200 align-middle'>
          <path d='m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z' className='border-gray-200'></path>
        </svg>
      </button>

      {isChatOpen && (
        <div style={{ boxShadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)' }} className='z-20 fixed bg-white p-6 md:rounded-lg md:border md:border-[#e5e7eb] w-full h-full md:w-[440px] md:h-[634px] bottom-0 right-0 m-0 md:bottom-[calc(4rem+1.5rem)] md:mr-4'>
          {/* Close Button */}
          <button onClick={toggleChat} className='absolute top-2 right-2 bg-transparent text-gray-400 hover:text-gray-900 cursor-pointer'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>

          {/* Heading */}
          <div className='flex flex-col space-y-1.5 pb-6'>
            <h2 className='font-semibold text-lg tracking-tight'>Chatbot</h2>
            <p className='text-sm text-[#6b7280] leading-3 '>Ask me anything; I am here to help you.</p>
          </div>

          {/* Chat Container */}
          <div className='h-[calc(100vh-150px)] md:h-[474px]' style={{ minWidth: '100%', display: 'table' }}>
            {/* Chat Message AI */}
            <div className='flex gap-2 my-3 text-gray-600 text-sm flex-1 mr-5'>
              <span className='relative flex shrink-0 overflow-hidden rounded-full w-8 h-8'>
                <div className='rounded-full bg-gray-100 border p-1'>
                  <svg stroke='none' fill='black' strokeWidth='1.5' viewBox='0 0 24 24' aria-hidden='true' height='20' width='20' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'></path>
                  </svg>
                </div>
              </span>
              <p className='leading-relaxed'>
                <span className='block font-bold text-gray-700'>AI </span>
                <div className='border border-gray-200 px-2 py-1 rounded-2xl rounded-tl-none bg-gray-100'>Hi, how can I help you today?</div>
              </p>
            </div>

            {/* User Chat Message */}
            <div className='flex justify-end gap-2 my-3 text-gray-600 text-sm flex-1 ml-5'>
              <p className='leading-relaxed'>
                <span className='flex justify-end block font-bold text-gray-700'>You </span>
                <div className='border border-gray-200 px-2 py-1 rounded-2xl rounded-tr-none bg-gray-100'>fewafef</div>
              </p>
              <span className='relative flex shrink-0 overflow-hidden rounded-full w-8 h-8'>
                <div className='rounded-full bg-gray-100 border p-1'>
                  <svg stroke='none' fill='black' strokeWidth='0' viewBox='0 0 16 16' height='20' width='20' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z'></path>
                  </svg>
                </div>
              </span>
            </div>

            {/* AI Chat Message */}
            <div className='flex gap-2 my-3 text-gray-600 text-sm flex-1 mr-5'>
              <span className='relative flex shrink-0 overflow-hidden rounded-full w-8 h-8'>
                <div className='rounded-full bg-gray-100 border p-1'>
                  <svg stroke='none' fill='black' strokeWidth='1.5' viewBox='0 0 24 24' aria-hidden='true' height='20' width='20' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'></path>
                  </svg>
                </div>
              </span>
              <p className='leading-relaxed'>
                <span className='block font-bold text-gray-700'>AI </span>
                <div className='border border-gray-200 px-2 py-1 rounded-2xl rounded-tl-none bg-gray-100'>Sorry, I couldn't find any information in the documentation about that. Expect answer to be less accurateI could not find the answer to this in the verified sources.</div>
              </p>
            </div>
          </div>

          {/* Input box */}
          <div className='flex items-center pt-0'>
            <form className='flex items-center justify-center w-full space-x-2'>
              <input className='flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2' placeholder='Type your message' value='' />
              <button className='inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#5a4ef6] text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#6c5cf4] h-10 px-4 py-2'>Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
