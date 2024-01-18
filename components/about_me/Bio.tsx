import styles from "../../styles/About.module.scss";
import {Card, Container, Text} from "@nextui-org/react";


const Bio = () => {
    return <Container className={styles.bio}>
        <Card bordered>
            <Text
                className={styles.bioText}>
                <p>{`Hi! I'm Aaron, a software engineer from New York City and I've been a computer fanatic my whole life. I fell in love with computers ever since my first, the iconic `}<a
                    href={"https://en.wikipedia.org/wiki/IMac_G3"} target={"_blank"}
                    rel={"noreferrer noopener"}>iMac
                    G3</a>{`. Becoming a programmer just made sense because I love building things, identifying and solving complex problems, and learning. Every week 300,000 new Javascript frameworks are released and I learn them all. Haha just kidding.`}
                </p>
                <p>{`I cannot emphasize enough how much I love learning. There's an infinite amount of information in this world and while it's absolutely impossible for me to learn it all, I wouldn't be content with my life if I didn't at least try. To me there is no such thing as failure because all failures are learning opportunities. I am a big supporter of mob programming and pair programming because when you put two brains together you get more than twice the performance and the opportunity to grow. No matter who they may be or what they have done, I always look to learn from those around me.`}</p>
            </Text>
        </Card>
    </Container>
}

export default Bio;