import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const PLATFORM_URL = process.env.NODE_ENV === "production" ? 'https://platform.boonbot.com' : "http://localhost:5173";

type WidgetProps = {
    userId: string;
    botId: string;
}
const Widget = ({ userId, botId }: WidgetProps) => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    return <main className='fixed right-0 bottom-0 mb-4 mr-4'>
        <iframe
            className={`absolute bottom-[calc(100%+0.5em)] right-0 w-[400px] h-[calc(100vh-300px)] rounded-lg shadow-lg border transition-all origin-bottom-right ${isWidgetOpen ? "scale-100" : "scale-0"}`}
            src={`${PLATFORM_URL}/widget/${userId}/${botId}`}
        ></iframe>
        <div
            className={`!w-12 !h-12 ml-auto mt-2 rounded-full bg-[#0e6eff] grid place-items-center cursor-pointer transition-all hover:scale-105 shadow-lg select-none`}
            onClick={() => { setIsWidgetOpen(!isWidgetOpen) }}
        >
            {isWidgetOpen ?
                <X width={24} height={24} strokeWidth={3} className="stroke-white" />
                :
                <svg viewBox="0 0 1012 956.4" width={24} height={24} fill="#ffffff">
                    <g transform="scale(9.036144578313253) translate(10, 10)">
                        <g
                            transform="matrix(1.2162714202235063,0,0,1.2162714202235063,-2.3801648951960552,-5.457259638101177)"
                        >
                            <path
                                d="M19.8,83.3c-0.4,0-0.8-0.1-1.1-0.3c-0.7-0.5-1-1.3-0.8-2.2l3.6-14.4H7.7c-0.9,0-1.8-0.7-2-1.6L-6.2,8.1
			c-0.1-0.6,0-1.1,0.3-1.6C-5.5,6.1-5,5.8-4.5,5.7l88.1-9.5c0.6-0.1,1.2,0.2,1.6,0.6s0.6,1.1,0.5,1.7L78,56.7c-0.1,1-1,1.7-2,1.7H53
			L21,82.9C20.7,83.2,20.2,83.3,19.8,83.3L19.8,83.3z"
                            />
                        </g>
                    </g>
                </svg>

                // <MessageCircle width={22} height={22} className="stroke-white" />
            }
        </div>
    </main>;
}

export default Widget;