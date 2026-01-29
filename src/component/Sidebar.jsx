import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Sidebar() {
    const Navigate = useNavigate();
    return (
        <div className='w-16 md:w-64 fixed h-full bg-black border-r border-gray-800 flex flex-col'>
            {/* Logo */}
            <div className='px-3 py-8 mb-4 flex justify-center md:justify-start'>
                <img className='hidden md:block w-32' src={logo} alt="Instagram" />
                <svg className='block md:hidden w-7' viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.982c2.937 0 3.285.011 4.445.064 1.072.049 1.655.228 2.042.379.513.2.88.437 1.265.822.385.385.622.752.822 1.265.151.387.33.97.379 2.042.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445c-.049 1.072-.228 1.655-.379 2.042-.2.513-.437.88-.822 1.265-.385.385-.752.622-1.265.822-.387.151-.97.33-2.042.379-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064c-1.072-.049-1.655-.228-2.042-.379-.513-.2-.88-.437-1.265-.822-.385-.385-.622-.752-.822-1.265-.151-.387-.33-.97-.379-2.042C2.993 15.285 2.982 14.937 2.982 12s.011-3.285.064-4.445c.049-1.072.228-1.655.379-2.042.2-.513.437-.88.822-1.265.385-.385.752-.622 1.265-.822.387-.151.97-.33 2.042-.379C8.715 2.993 9.063 2.982 12 2.982M12 1c-2.987 0-3.362.013-4.535.066-1.171.054-1.971.24-2.67.512-.723.28-1.336.657-1.948 1.269-.612.612-.989 1.225-1.269 1.948-.272.699-.458 1.499-.512 2.67C1.013 8.638 1 9.013 1 12s.013 3.362.066 4.535c.054 1.171.24 1.971.512 2.67.28.723.657 1.336 1.269 1.948.612.612 1.225.989 1.948 1.269.699.272 1.499.458 2.67.512C8.638 22.987 9.013 23 12 23s3.362-.013 4.535-.066c1.171-.054 1.971-.24 2.67-.512.723-.28 1.336-.657 1.948-1.269.612-.612.989-1.225 1.269-1.948.272-.699.458-1.499.512-2.67.053-1.173.066-1.548.066-4.535s-.013-3.362-.066-4.535c-.054-1.171-.24-1.971-.512-2.67-.28-.723-.657-1.336-1.269-1.948-.612-.612-1.225-.989-1.948-1.269-.699-.272-1.499-.458-2.67-.512C15.362 1.013 14.987 1 12 1z"/>
                    <path d="M12 6.865c-2.84 0-5.135 2.295-5.135 5.135S9.16 17.135 12 17.135s5.135-2.295 5.135-5.135S14.84 6.865 12 6.865zm0 8.468c-1.84 0-3.333-1.493-3.333-3.333S10.16 8.667 12 8.667s3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"/>
                    <circle cx="17.338" cy="6.662" r="1.2"/>
                </svg>
            </div>

            {/* Main Navigation */}
            <nav className='flex-1 px-3'>
                <div onClick={()=>Navigate('/')} className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4 mb-2'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0">
                        <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>Home</span>
                </div>

                <div className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4 mb-2'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>Search</span>
                </div>

                <div className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4 mb-2'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="4"/>
                        <line x1="12" y1="2" x2="12" y2="4"/>
                        <line x1="12" y1="20" x2="12" y2="22"/>
                        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>
                        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
                        <line x1="2" y1="12" x2="4" y2="12"/>
                        <line x1="20" y1="12" x2="22" y2="12"/>
                        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>
                        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>Explore</span>
                </div>

                <div className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4 mb-2'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                        <line x1="7" y1="2" x2="7" y2="22"/>
                        <line x1="17" y1="2" x2="17" y2="22"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <line x1="2" y1="7" x2="7" y2="7"/>
                        <line x1="2" y1="17" x2="7" y2="17"/>
                        <line x1="17" y1="17" x2="22" y2="17"/>
                        <line x1="17" y1="7" x2="22" y2="7"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>Reels</span>
                </div>

                <div className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4 mb-2'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>Messages</span>
                </div>

                <div className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4 mb-2'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>Notifications</span>
                </div>

                <div className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4 mb-2'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="12" y1="8" x2="12" y2="16"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>Create</span>
                </div>

                <div onClick={()=>Navigate('/profile')} className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4 mb-2'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="12" cy="8" r="5"/>
                        <path d="M20 21a8 8 0 1 0-16 0"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>Profile</span>
                </div>
            </nav>

            {/* Bottom Navigation */}
            <div className='px-3 pb-6 border-t border-gray-800 pt-6'>
                <div className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4 mb-2'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>Threads</span>
                </div>

                <div className='cursor-pointer hover:bg-gray-900 py-3 px-3 rounded-lg flex items-center gap-4'>
                    <svg className='w-7 h-7 flex-shrink-0' viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>
                    <span className='hidden md:block text-white text-base font-normal'>More</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar