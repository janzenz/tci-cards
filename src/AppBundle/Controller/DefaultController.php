<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use AppBundle\Entity\Logs;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', array(
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..'),
        ));
    }

    /**
     * @Rest\Post
     */
    public function saveLogAction(Request $request)
    {
        $logs = new Logs();

        $logs->setCards($request->request->get('cards'));
        $logs->setCardsDealt($request->request->get('cards_dealt'));
        $logs->setWinner($request->request->get('winner'));

        $em = $this->getDoctrine()->getManager();
        $em->persist($logs);
        $em->flush();
    }
}
