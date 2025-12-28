import MarqueeProps from "react-fast-marquee";
export default function Marquee(){
    return(
        <div className="mt-3 ">
            <MarqueeProps className="gap-3">
                <img src="/net.svg" alt="Marquee Image" className="h-20 mx-4"/>
                <img src="/laravel.png" alt="Marquee Image" className="h-20 mx-4"/>
                <img src="/react.png" alt="Marquee Image" className="h-20 mx-4"/>
                <img src="/sql_server.svg" alt="Marquee Image" className="h-20 mx-4"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" alt="Marquee Image" className="h-20 mx-4"/>
                <img src="/mysql.svg" alt="Marquee Image" className="h-20 mx-4"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Cloud.svg" alt="Marquee Image" className="h-20 mx-4"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Apache_kafka_wordtype.svg" alt="Marquee Image" className="h-20 mx-4"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg" alt="Marquee Image" className="h-20 mx-4"/>
            </MarqueeProps>
        </div>
    );
}