import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "../../Loading";

export function ScreenshotButton() {
    const [isTakingScreenShot, setIsTakinScreenShot] = useState(false)

    async function handleTakeScreenshot(){
        setIsTakinScreenShot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')
        setIsTakinScreenShot(false)
    }
    return (
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors "
        >
            {
                isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" />
            }
        </button>
    );
}
