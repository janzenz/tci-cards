<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Logs
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Logs
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="cards", type="text")
     */
    private $cards;

    /**
     * @var string
     *
     * @ORM\Column(name="cards_dealt", type="text")
     */
    private $cards_dealt;

    /**
     * @var string
     *
     * @ORM\Column(name="winner", type="string", length=255)
     */
    private $winner;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set cards
     *
     * @param string $cards
     *
     * @return Logs
     */
    public function setCards($cards)
    {
        $this->cards = $cards;

        return $this;
    }

    /**
     * Get cards
     *
     * @return string
     */
    public function getCards()
    {
        return $this->cards;
    }

    /**
     * Set cardsDealt
     *
     * @param string $cardsDealt
     *
     * @return Logs
     */
    public function setCardsDealt($cardsDealt)
    {
        $this->cards_dealt = $cardsDealt;

        return $this;
    }

    /**
     * Get cardsDealt
     *
     * @return string
     */
    public function getCardsDealt()
    {
        return $this->cards_dealt;
    }

    /**
     * Set winner
     *
     * @param string $winner
     *
     * @return Logs
     */
    public function setWinner($winner)
    {
        $this->winner = $winner;

        return $this;
    }

    /**
     * Get winner
     *
     * @return string
     */
    public function getWinner()
    {
        return $this->winner;
    }
}

