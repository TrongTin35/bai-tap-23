* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f0f4f8;
    color: #222;
    text-align: center;
}

header {
    background: #14213d;
    color: white;
    padding: 25px 10px;
    border-bottom: 5px solid orange;
}

.container {
    max-width: 700px;
    margin: 30px auto;
    padding: 15px;
}

.card {
    background: white;
    padding: 20px;
    margin: 20px 0;
    border-radius: 12px;
    box-shadow: 0 4px 10px #0002;
}

.card a {
    display: inline-block;
    background: #2563eb;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 6px;
}

.card a:hover {
    background: #14213d;
}

.student {
    margin: 25px auto;
    padding: 15px;
    background: white;
    border: 2px dashed #2563eb;
    border-radius: 10px;
}

footer {
    padding: 15px;
    color: #555;
}

/* Khu vực đèn kéo quân */
.lantern-page {
    padding: 20px 10px;
}

.stage {
    width: 320px;
    height: 320px;
    margin: 50px auto;
    perspective: 800px;
}

.lantern {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: quayDen 12s linear infinite;
}

.lantern.paused {
    animation-play-state: paused;
}

.photo {
    position: absolute;
    width: 140px;
    height: 180px;
    left: 90px;
    top: 70px;
    border: 4px solid orange;
    border-radius: 10px;
    overflow: hidden;
    background: white;
    backface-visibility: visible;
}

.photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.photo1 {
    transform: rotateY(0deg) translateZ(150px);
}

.photo2 {
    transform: rotateY(60deg) translateZ(150px);
}

.photo3 {
    transform: rotateY(120deg) translateZ(150px);
}

.photo4 {
    transform: rotateY(180deg) translateZ(150px);
}

.photo5 {
    transform: rotateY(240deg) translateZ(150px);
}

.photo6 {
    transform: rotateY(300deg) translateZ(150px);
}

@keyframes quayDen {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(360deg);
    }
}

#status {
    color: #2563eb;
    font-weight: bold;
}

@media (max-width: 450px) {
    .stage {
        transform: scale(0.8);
        margin: 20px auto;
    }
}