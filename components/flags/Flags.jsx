export function VipPriceFlag({ isVipPrice }) {
  return isVipPrice ? <div className="flag vip test">VIP Price</div> : <></>;
}

export function BulkDiscountFlag({ isBulkDiscount }) {
  return isBulkDiscount ? (
    <div className="flag bulk-discount">Bulk Discount</div>
  ) : (
    <></>
  );
}

export function MoqFlag({ moqNumber }) {
  return moqNumber > 0 ? (
    <div className="flag moq">MOQ: {moqNumber}</div>
  ) : (
    <></>
  );
}
