'use client'

import { useState } from 'react'
import { ShieldCheck, X } from 'lucide-react'
import { KNOWN_LAYERS, VERIFICATION_LAYER_LABELS } from '@/lib/badge-types'
import type { VerificationLayer } from '@/lib/badge-types'

interface BadgeAwardFormProps {
  campaignId: string
  onComplete?: () => void
}

export function BadgeAwardForm({ campaignId, onComplete }: BadgeAwardFormProps) {
  const [selectedLayer, setSelectedLayer] = useState<VerificationLayer | ''>('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (action: 'award' | 'revoke') => {
    if (!selectedLayer) return
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const res = await fetch('/api/admin/verification', {
        method: action === 'award' ? 'POST' : 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          action === 'award'
            ? { campaignId, layer: selectedLayer, notes }
            : { campaignId, layer: selectedLayer, reason: notes },
        ),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Request failed')
      setSuccess(true)
      setSelectedLayer('')
      setNotes('')
      onComplete?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Award Verification Layer</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Campaign ID</label>
          <input
            type="text"
            value={campaignId}
            disabled
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Verification Layer</label>
          <select
            value={selectedLayer}
            onChange={(e) => setSelectedLayer(e.target.value as VerificationLayer | '')}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            <option value="">Select a layer...</option>
            {KNOWN_LAYERS.map((layer) => (
              <option key={layer} value={layer}>
                {VERIFICATION_LAYER_LABELS[layer]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            placeholder="Optional notes or evidence description..."
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-lg p-3">
            <X className="h-4 w-4" />
            {error}
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 rounded-lg p-3">
            <ShieldCheck className="h-4 w-4" />
            Layer awarded successfully
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => handleSubmit('award')}
            disabled={!selectedLayer || loading}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Award Layer'}
          </button>
          <button
            onClick={() => handleSubmit('revoke')}
            disabled={!selectedLayer || loading}
            className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Revoke
          </button>
        </div>
      </div>
    </div>
  )
}
