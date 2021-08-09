import React from "react";
import useScript from "../hooks/useScript";
import {WEB_SDK_URL} from "../config";

export interface ApesterMediaWidgetProps {
    id?: string;
    height?: string;
    className?: string;
    results?: string;
    'data-media-id': string;
    'data-token'?: string;
    'data-campaign-id'?: string;
    'data-auto-fullscreen'?: string;
    'data-manual-top'?: string;
    'data-manual-top-desktop'?: string;
    'data-manual-top-mobile'?: string;
    'external-id'?: string;
    sandboxMode?: boolean;
}


const ApesterMediaWidget = React.forwardRef<HTMLDivElement, ApesterMediaWidgetProps>(({ className = '', sandboxMode= false, ...props }, ref) => {
    const scriptStatus = useScript(WEB_SDK_URL);
    if(!props['data-media-id']) {
        throw new Error("'data-media-id' is mandatory prop.");
    }
    if(scriptStatus === 'ready') {
        // @ts-ignore
        return <div
            ref={ref}
            className={`apester-media ${className}`}
            sandbox-mode={`${sandboxMode}`}
            {...props}
        />
    }
    return null;
});

export default ApesterMediaWidget;
