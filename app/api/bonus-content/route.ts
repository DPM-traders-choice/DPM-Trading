import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const DEFAULT = {
  id: 'main',
  heading: 'Trade Bigger with a 20% Margin Bonus',
  subheading: 'Amplify your trading potential with a 20% Margin Bonus on us!',
  bodyText: 'DPM is pleased to offer its Clients a Margin bonus Account to help them start their trading journey. Claim yours today through your members area.',
  bullets: ['Get instantly 20% extra Credit to trade with.', 'Your 20% Bonus may be lost.', 'Claim up to $500.'],
  cardLabel: 'Welcome Bonus',
  cardPercent: '20%',
  cardDesc: "A bonus is more than a perk. It's a trading advantage that boosts your profits when the markets move with you.",
  cardFeatures: ['Up to $500 bonus credit', 'Commission-free trading', 'Available on all account types'],
}

export async function GET() {
  const data = await prisma.bonusContent.findUnique({ where: { id: 'main' } })
  return NextResponse.json(data ?? DEFAULT)
}

export async function PUT(req: NextRequest) {
  const body = await req.json()
  const data = await prisma.bonusContent.upsert({
    where: { id: 'main' },
    update: {
      heading:      body.heading,
      subheading:   body.subheading,
      bodyText:     body.bodyText,
      bullets:      body.bullets,
      cardLabel:    body.cardLabel,
      cardPercent:  body.cardPercent,
      cardDesc:     body.cardDesc,
      cardFeatures: body.cardFeatures,
    },
    create: { ...DEFAULT, ...body, id: 'main' },
  })
  return NextResponse.json(data)
}
